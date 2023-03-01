from .db import db, environment, SCHEMA, add_prefix_for_prod
from .user_games import UserGames

class Game(db.Model):
    __tablename__ = 'games'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)

    messages = db.relationship("Message", back_populates="game")
    user = db.relationship("User", back_populates="games", secondary=UserGames,)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'userId': self.user_id,
        }

