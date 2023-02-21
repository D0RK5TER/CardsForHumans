from app.models import db, User, environment, SCHEMA, Card, Deck, DeckCard


# Adds a demo user, you can add other users here if you want
def seed_cards():
    demo =  Card(
        creator=1,  is_question=False, text='Squirrel Poop')
    marnie = Card(
        creator=2, is_question=False,text='Washing Your Hands')
    bobbie = Card(
        creator=3, is_question=False,text='Brushing Your Teeth')
    robbie =  Card(
        creator=4,  is_question=False,text='Melting Marshmellows')
    mobbie = Card(
        creator=5, is_question=False,text='Staying Up too Late')
    sobbie = Card(
        creator=6, is_question=False,text='Being Sick')
    kobbie =  Card(
        creator=6,  is_question=False,text='Asking for the Day Off')
    pobbie = Card(
        creator=6, is_question=False,text='Homework')
    tobbie = Card(
        creator=6, is_question=False,text='Ice Cream')
    
    q1 = Card(creator=6, is_question=True, text='What is worse than Homework?')
    q2 = Card(creator=6, is_question=True, text='What is something that would get you in trouble?')
    q3 = Card(creator=6, is_question=True, text='What is your favorite part about the holdiays?')
    q4 = Card(creator=6, is_question=True, text='What can you never have enough of?')
    q5 = Card(creator=6, is_question=True, text='What do you never want to do again?')
    q6 = Card(creator=6, is_question=True, text='In the perfect world, I would never...')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(robbie)
    db.session.add(mobbie)
    db.session.add(sobbie)
    db.session.add(kobbie)
    db.session.add(pobbie)
    db.session.add(tobbie)
    db.session.add(q1)
    db.session.add(q2)
    db.session.add(q3)
    db.session.add(q4)
    db.session.add(q5)
    db.session.add(q6)
    db.session.commit()



# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_cards():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.cards RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM cards")
        
    db.session.commit()