from flask.cli import AppGroup
from .users import seed_users, undo_users
from .decks import seed_decks, undo_decks
from .cards import seed_cards, undo_cards
from .prints import seed_prints, undo_prints
from .favorites import seed_favorites, undo_favorites
from .deck_cards import seed_deck_cards, undo_deck_cards
from .games import seed_games, undo_games
from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo 
        # command, which will  truncate all tables prefixed with 
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_games()
        undo_deck_cards()
        undo_favorites()
        undo_prints()
        undo_cards()
        undo_decks()
        undo_users()
    seed_users()
    seed_decks()
    seed_cards()
    seed_prints()
    seed_favorites()
    seed_deck_cards()
    seed_games()

    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_games()
    undo_deck_cards()
    undo_favorites()
    undo_prints()
    undo_cards()
    undo_decks()
    undo_users()
    # Add other undo functions here