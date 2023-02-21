# from .db import db, environment, SCHEMA, add_prefix_for_prod
# from .card import Card
# from .deck import Deck

from .db import db, environment, SCHEMA, add_prefix_for_prod


DeckCard = db.Table(
    'deck_cards',
    db.Model.metadata,
    db.Column('decks', db.Integer, db.ForeignKey(add_prefix_for_prod('decks.id')), primary_key=True ),
    db.Column('cards', db.Integer, db.ForeignKey(add_prefix_for_prod('cards.id')), primary_key=True )
)


if environment == "production":
    DeckCard.schema = SCHEMA

# class DeckCards(db.Model):
#     __tablename__ = 'deck_cards'

#     if environment == "production":
#         __table_args__ = {'schema': SCHEMA}

#     deck_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('decks.id')), primary_key=True, nullable=False)
#     card_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('cards.id')), primary_key=True, nullable=False)

    # deck = db.relationship("Deck",  back_populates="")
    # card = db.relationship("Card", back_populates="answers")

    # Card.answers = db.relationship("UserAnswer", back_populates="user", cascade="all, delete-orphan")
    # Deck.answers = db.relationship("UserAnswer", back_populates="question", cascade="all, delete-orphan")
