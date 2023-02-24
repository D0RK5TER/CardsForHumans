from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from datetime import datetime
from .favorites import Favorite

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    created = db.Column(db.DateTime, default=datetime.utcnow)

    maker = db.relationship('Card', back_populates='made_by')
    
    owner =  db.relationship('Deck', back_populates='owned_by')
    print_history = db.relationship('Print', back_populates='printed_by')
    favorites = db.relationship('Card', secondary=Favorite, back_populates='liked_by')

    
    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def basic(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'created': self.created,
        }
    
    def users_decks(self):
        return {
            'id': self.id,
            'decks': [deck.deck_cards() for deck in self.owner]
        }

    def users_all_details(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'created': self.created,
            'decks': [deck.deck_cards() for deck in self.owner],
            'cards_made': [c.basic() for c in self.maker],
        }
    
    def current_user(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'created': self.created,
            'decks': [deck.basic() for deck in self.owner],
            'cards_made': [c.basic() for c in self.maker],
            'favorites': [c.basic() for c in self.favorites],
            'prints': [p.current_user() for p in self.print_history]
        }
    def likes(self):
        return {
            'likes': [c.id for c in self.favorites],
            'favs': self.favorites
        }
    def del_likes(self):
        return{
            'favs': self.favorites
        }
    # def user_deck_card(self):
    #     return {
    #         'id': self.id,
    #         'decks': [deck.basic() for deck in self.owner]
    #     }