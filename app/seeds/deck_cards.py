from random import randint
from app.models import db, User, environment, SCHEMA, Card, Deck, Print, Favorite


# Adds a demo user, you can add other users here if you want
def seed_deck_cards():
    decks = Deck.query.all()
    for d in decks:
        cards = Card.query.all()
        fav_num = 0
        deck_num = randint(23,52)        
        while fav_num < deck_num:
            card = cards.pop(randint(0,len(cards)-1))
            d.cards.append(card)
            fav_num += 1

    db.session.commit()



# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_deck_cards():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.deck_cards RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM deck_cards")
        
    db.session.commit()