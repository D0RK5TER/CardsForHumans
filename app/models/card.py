from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
from .favorites import Favorite
from .deck_cards import DeckCard


class Card(db.Model):
    __tablename__ = 'cards'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}


#COLUMNS
    id = db.Column(db.Integer, primary_key=True)
    creator = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("users.id")), nullable=False)
    text = db.Column(db.String(60), nullable=False)
    is_question = db.Column(db.Integer, nullable=False,  default=0)
    created = db.Column(db.DateTime, default=datetime.utcnow)

#RELATIONSHIPS

    made_by = db.relationship('User', back_populates='maker')

    
    in_deck = db.relationship(
        'Deck', secondary=DeckCard, back_populates='cards')
    liked_by = db.relationship(
        'User', secondary=Favorite, back_populates='favorites')

#ROUTE INSTANCE METHODS
    def basic(self):
        return {
            'id': self.id,
            'text': self.text,
            'is_question': self.is_question
        }

    def extra(self):
        # age = datetime.utcnow
        # age -= self.created
        return {
            'id': self.id,
            'text': self.text,
            'is_question': self.is_question,
            # 'age': age,
            'made_by': self.made_by.basic()
        }
        
    def one_card(self):
        return {
            'id': self.id,
            'text': self.text,
            'is_question': self.is_question,
            # 'age': age,
            'made_by': self.made_by.id,
            'in': [d.basic() for d in self.in_deck],
            'likes': len(self.liked_by)
        }