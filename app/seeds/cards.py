from app.models import db, User, environment, SCHEMA, Card, Deck, DeckCard


# Adds a demo user, you can add other users here if you want
def seed_cards():  
    tobbie =  Card(
        creator=1,    is_question=0, text='Squirrel Poop')
    db.session.add(tobbie)
    tobbie = Card(
        creator=2,   is_question=0,text='Washing Your Hands')
    db.session.add(tobbie)
    tobbie = Card(
        creator=3,   is_question=0,text='Brushing Your Teeth')
    db.session.add(tobbie)
    tobbie =  Card(
        creator=4,    is_question=0,text='Melting Marshmellows')
    db.session.add(tobbie)
    tobbie = Card(
        creator=5,   is_question=0,text='Staying Up too Late')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Being Sick')
    db.session.add(tobbie)
    tobbie =  Card(
        creator=6,    is_question=0,text='Asking for the Day Off')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Homework')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Poke it with a stick')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Passing Gas')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='A Car')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Pirate Treasure')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='A Chocolate Bath')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Pretending Your Sick')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='My stash of halloween candy')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Easter Eggs')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='My dads smelly shoes')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='hiding in your blankets')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='wetting the bed')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Taco Flavored Pizza')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Boogers')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='a barn cat')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='a cat in a tuxedo')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='kissing a frog')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='A bow and arrow')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='A homerun')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='farting in a microphone')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Science')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='microwavable pizza')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='hot pockets')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='a bag of flaming poop')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='A T-Rex')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Captain Planet')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='enlisting in the army')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='becoming a doctor')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='massaging feet')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='ro-sham-bo')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='flipping a coin')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='drinking puddle water')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='my dirty hamper')
    db.session.add(tobbie)




    q = []
    q6 = Card(creator=1,   is_question=1, text='What is worse than Homework?')
    db.session.add(q6)
    q6 = Card(creator=2,   is_question=1, text='What is something that would get you in trouble?')
    db.session.add(q6)
    q6 = Card(creator=3,   is_question=1, text='What is your favorite part about the holdiays?')
    db.session.add(q6)
    q6 = Card(creator=4,   is_question=1, text='What can you never have enough of?')
    db.session.add(q6)
    q6 = Card(creator=5,   is_question=1, text='What do you never want to do again?')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='They just made _ Smaller!')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='The beset halloween costume is _')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='After im famous, i will _')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='Heaven is full of _')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='_ blank smells horrbile')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='Why am I sticky?')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='Why did I forget to do my homework?')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='Why are pirates always after booty?')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='Introducting Extreme _ ')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='I hate it when _')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='Dresscode requires you to wear _')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='I just got a _ and it is great')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='I just got a _ and it is horrible')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='Disnay came out with a _ movie')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='I hate it when my mom _')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='I bet there are _ on the moon')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='Death by _ would be the worst')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='Why do i hurt?')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='My last text was about a _')
    db.session.add(q6)
    q6 = Card(creator=6,  is_question=1, text='My pet lizard is great at _')
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