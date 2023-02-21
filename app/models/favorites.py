# from .db import db, environment, SCHEMA, add_prefix_for_prod
# from datetime import datetime


from .db import db, environment, SCHEMA, add_prefix_for_prod


Favorite = db.Table(
    'favorites',
    db.Model.metadata,
    db.Column('users', db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), primary_key=True ),
    db.Column('cards', db.Integer, db.ForeignKey(add_prefix_for_prod('cards.id')), primary_key=True )
)


if environment == "production":
    Favorite.schema = SCHEMA

# class Favorite(db.Model):
#     __tablename__ = 'favorites'

#     if environment == "production":
#         __table_args__ = {'schema': SCHEMA}

#     user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), primary_key=True, nullable=False)
    
#     card_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('cards.id')), primary_key=True, nullable=True)
#     deck_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('decks.id')), primary_key=True, nullable=True)

    #need models?