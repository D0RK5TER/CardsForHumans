from app.models import db, User, environment, SCHEMA, Card, Deck, DeckCard


# Adds a demo user, you can add other users here if you want
def seed_decks():
    demo =  Deck(
        owner=1,  title='ChildsPlay')
    marnie = Deck(
        owner=2, title='2InTheHand')
    bobbie = Deck(
        owner=3, title='3rd Times The Charm')
    robbie =  Deck(
        owner=4,  title='Fourviously')
    mobbie = Deck(
        owner=5, title='Octagon/2')
    sobbie = Deck(
        owner=6, title='starter deck')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(robbie)
    db.session.add(mobbie)
    db.session.add(sobbie)
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