from random import randint
from app.models import db, User, environment, SCHEMA, Card, Deck, Print


# Adds a demo user, you can add other users here if you want
def seed_prints():
    users = User.query.all()
    cards = Card.query.all()
    for u in users:
        print_num = randint(1, len(cards)-1)
        while print_num >= 0:
            new_print = Print(
                user=u.id,
                card=cards[print_num].id
            )
            db.session.add(new_print)
            print_num -= 1

    db.session.commit()



# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_prints():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.prints RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM prints")
        
    db.session.commit()