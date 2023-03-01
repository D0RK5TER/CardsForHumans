

from .db import db, environment, SCHEMA, add_prefix_for_prod


UserGames = db.Table(
    "user_games",
    db.Model.metadata,
    db.Column(
        "user", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), primary_key=True
    ),
    db.Column(
        "game", db.Integer, db.ForeignKey(add_prefix_for_prod("games.id")), primary_key=True
    )
)
