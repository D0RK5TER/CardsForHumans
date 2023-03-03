from flask_socketio import SocketIO, send, emit, join_room, leave_room
from app.models import db, Message, Game, User
from flask_login import login_required, current_user
import os
from datetime import datetime

if os.environ.get("FLASK_ENV") == "production":
    origins = [
        "http://cardsforhumans.onrender.com",
        "https://cardsforhumans.onrender.com"
    ]
else:
    origins = "*"

# create your SocketIO instance
socketio = SocketIO(cors_allowed_origins=origins)


# handle chat messages
@socketio.on("chat")
def handle_chat(data):
    if len(data['message']) > 0 and len(data['message']) <= 2000:
        message = Message(
        user_id=current_user.id,
        room_id=int(data['room']),
        message=data['message'],
        created_at=datetime.now()
    )
        # print('--------BACKENDDATA', message.to_dict())
        db.session.add(message)
        db.session.commit()
        # new_message_date = datetime.now()
        if data['room']:
            room = data['room']
            emit("game", data, broadcast=True, to=room)


@socketio.on('join')
def on_join(data):
    game = Game.query.get(data['id'])
    game.user.append(User.query.get(current_user.id))
    db.session.commit()
    join_room(game.id)
    send( game.basic(), to=game.id)

@socketio.on('leave')
def on_leave(data):
    username = data['username']
    room = data['room']
    leave_room(room)
    send(username + ' has left the room.', to=room)


#you need which message in the array the user wants to delete
#first get the array of messages send it backend
#iterate to find the message that you need to delete and delte it in the backend
#query the message
#destroy the message
#then take the array and remove the message from it and emit it back to the users
