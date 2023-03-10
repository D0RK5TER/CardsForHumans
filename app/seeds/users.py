from app.models import db, User, environment, SCHEMA, Card, Deck, DeckCard


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='demolish', email='demo@gmail.com', password='password')
    marnie = User(
        username='homosapian', email='one@gmail.com', password='password')
    bobbie = User(
        username='duesex', email='two@gmail.com', password='password')
    robbie = User(
        username='3musket', email='three@gmail.com', password='password')
    mobbie = User(
        username='squaremen', email='four@gmail.com', password='password')
    sobbie = User(
        username='admain', email='five@gmail.com', password='password')

    


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
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")
        
    db.session.commit()