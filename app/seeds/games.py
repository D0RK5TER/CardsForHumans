from random import randint
from app.models import db, User, environment, SCHEMA, Card, User, Game
import uuid

# Adds a demo user, you can add other users here if you want
def seed_games():
    users = User.query.all()
    for d in users:
        game = Game( name=d.username, user_id=d.id, live_id=str(uuid.uuid4()) )
        db.session.add(game)
    db.session.commit()



# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_games():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.games RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM games")
        
    db.session.commit()