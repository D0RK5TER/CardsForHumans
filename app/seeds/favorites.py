from random import randint
from app.models import db, User, environment, SCHEMA, Card, Deck, Print, Favorite


# Adds a demo user, you can add other users here if you want
def seed_favorites():
    users = User.query.all()
    for u in users:
        cards = Card.query.all()
        fav_num = randint(1, len(cards)-1)
        while fav_num >= 0:
            u.favorites.append(cards[fav_num])
            # db.session.add(new_fav)
            fav_num -= 1

    db.session.commit()



# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_favorites():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.favorites RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM favorites")
        
    db.session.commit()