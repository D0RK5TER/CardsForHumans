from app.models import db, User, environment, SCHEMA, Card, Deck, DeckCard


# Adds a demo user, you can add other users here if you want
def seed_decks():
    demo =  Deck(
        owner=1,  title='Childs-Play', icon='6')
    marnie = Deck(
        owner=2, title='2nd Place', icon='1')
    bobbie = Deck(
        owner=3, title='3rd Times The Charm', icon='7')
    robbie =  Deck(
        owner=4,  title='Fourviously', icon='5')
    mobbie = Deck(
        owner=5, title='Half a Octopus', icon='3')
    sobbie = Deck(
        owner=1, title='OG Deck', icon='3')
    db.session.add(sobbie)
    sobbie = Deck(
        owner=6, title='Starter', icon='0')
    db.session.add(sobbie)
    sobbie = Deck(
        owner=1, title='Deck-zilla', icon='2')
    db.session.add(sobbie)
    sobbie = Deck(
        owner=6, title='Just Another Deck', icon='6')
    db.session.add(sobbie)

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(robbie)
    db.session.add(mobbie)
    db.session.commit()



# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_decks():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.decks RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM decks")
        
    db.session.commit()