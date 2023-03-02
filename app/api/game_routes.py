
from flask import Blueprint, redirect, render_template, url_for, session, request, jsonify
from flask_login import login_required, current_user
import json
from app.models import db, Game, User, Message
from sqlalchemy.orm import joinedload

game_routes = Blueprint("game", __name__)



#Get one game
@game_routes.route("/<int:id>")
@login_required
def one_game_index(id):
    game= Game.query.get(id)
    one_game = game.to_dict()
    one_game_messages = Message.query.filter(Message.room_id == id).order_by(Message.created_at.asc()).all()

    game_messages = [message.to_dict() for message in one_game_messages]
    message_with_user = []
    for m in game_messages:
        user = User.query.get(m['userId']).basic()
        m['user'] = user
        message_with_user.append(m)

    return {"game": one_game, "messages": message_with_user}, 200
