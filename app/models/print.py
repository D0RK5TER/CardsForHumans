from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime


class Print(db.Model):
    __tablename__ = 'prints'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=True)
    deck = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("decks.id")), nullable=True)
    card = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("cards.id")), nullable=True)
    created = db.Column(db.DateTime, default=datetime.utcnow)

    printed_by = db.relationship('User', back_populates='print_history')
    cardD = db.relationship('Card', back_populates='p_times')

    def basic(self):
        return {

        }

    def current_user(self):
        return {
            'card': self.card,
            'deck': self.deck
        }
    
    def cards(self):
        return {
            'id': self.id,
            'card': self.card,
            'created': self.created
        }
    
    
    