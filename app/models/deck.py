from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
from .deck_cards import DeckCard

class Deck(db.Model):
    __tablename__ = 'decks'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    owner = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    title = db.Column(db.String(30), nullable=False)
    created = db.Column(db.DateTime, default=datetime.utcnow)
    
    owned_by = db.relationship('User', back_populates='owner')
    cards = db.relationship('Card', secondary=DeckCard, back_populates='in_deck')

    # cards = db.Column(db.String(255), nullable=False, unique=True)
    # hashed_password = db.Column(db.String(255), nullable=False)
    # created = db.Column(db.DateTime, default=datetime.utcnow)

    