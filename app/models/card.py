from .db import db, environment, SCHEMA, add_prefix_for_prod
from datetime import datetime
from .favorites import Favorite
from .deck_cards import DeckCard


class Card(db.Model):
    __tablename__ = 'cards'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    creator = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("users.id")), nullable=False)
    text = db.Column(db.String(30), nullable=False)
    is_question = db.Column(db.Boolean, nullable=False,  default=False)

    created = db.Column(db.DateTime, default=datetime.utcnow)

    made_by = db.relationship('User', back_populates='maker')
    in_deck = db.relationship(
        'Deck', secondary=DeckCard, back_populates='cards')
    liked_by = db.relationship(
        'User', secondary=Favorite, back_populates='favorites')
