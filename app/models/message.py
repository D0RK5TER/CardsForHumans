from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Message(db.Model):
    __tablename__ = 'messages'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    room_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('games.id')), nullable=False)
    message = db.Column(db.String(2000), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship("User", back_populates="messages")
    game = db.relationship("Game", back_populates="messages")

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'gameId': self.room_id,
            'message':self.message,
            'createdAt': self.created_at
        }
    
    def basic(self):
        return {
            'id': self.id,
            'user': self.user.name(),
            'message':self.message,
        }