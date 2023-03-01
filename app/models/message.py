from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime

class Message(db.Model):
    __tablename__ = 'messages'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    game_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('games.id')), nullable=False)
    message = db.Column(db.String(2000), nullable=False)
    is_edited = db.Column(db.Boolean, nullable=False, default=False)
    live_id = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    user = db.relationship("User", back_populates="messages")
    game = db.relationship("Game", back_populates="messages")

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'gameId': self.game_id,
            'message':self.message,
            'isEdited':self.is_edited,
            'liveId':self.live_id,
            'createdAt': self.created_at
        }
    
    