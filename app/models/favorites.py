
from .db import db, environment, SCHEMA, add_prefix_for_prod

Favorite = db.Table(
    'favorites',
    db.Model.metadata,
    db.Column('users', db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), primary_key=True ),
    db.Column('cards', db.Integer, db.ForeignKey(add_prefix_for_prod('cards.id')), primary_key=True )
)


if environment == "production":
    Favorite.schema = SCHEMA


