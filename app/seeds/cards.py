from app.models import db, User, environment, SCHEMA, Card, Deck, DeckCard


# Adds a demo user, you can add other users here if you want
def seed_cards():  
    tobbie =  Card(
        creator=1,    is_question=0, text='Because Mom Said So')
    db.session.add(tobbie)
    tobbie = Card(
        creator=2,   is_question=0,text='Washing your hands')
    db.session.add(tobbie)
    tobbie = Card(
        creator=3,   is_question=0,text='Brushing your teeth')
    db.session.add(tobbie)
    tobbie =  Card(
        creator=4,    is_question=0,text='Melted Mashmallows')
    db.session.add(tobbie)
    tobbie = Card(
        creator=5,   is_question=0,text='Staying up too late')
    db.session.add(tobbie)
    tobbie = Card(
        creator=1,   is_question=0,text='Being Sick')
    db.session.add(tobbie)
    tobbie =  Card(
        creator=2,    is_question=0,text='Asking for the dayoff')
    db.session.add(tobbie)
    tobbie = Card(
        creator=3,   is_question=0,text='Homework')
    db.session.add(tobbie)
    tobbie = Card(
        creator=4,   is_question=0,text='Poke it with a stick')
    db.session.add(tobbie)
    tobbie = Card(
        creator=5,   is_question=0,text='Passing Gas')
    db.session.add(tobbie)
    tobbie = Card(
        creator=1,   is_question=0,text='A car')
    db.session.add(tobbie)
    tobbie = Card(
        creator=2,   is_question=0,text='Pirate Treasure')
    db.session.add(tobbie)
    tobbie = Card(
        creator=2,   is_question=0,text='A Chocolate Bath')
    db.session.add(tobbie)
    tobbie = Card(
        creator=1,   is_question=0,text="Pretending you're sick")
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='My stash of Halloween candy')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Easter Eggs')
    db.session.add(tobbie)
    tobbie = Card(
        creator=2,   is_question=0,text="Dad's Smelly Shoes")
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Hiding in your blankets')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Wetting the bed')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Taco Flavored Pizza')
    db.session.add(tobbie)
    tobbie = Card(
        creator=2,   is_question=0,text='Boogers')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='A barn cat')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='A cat in a tuxedo')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Kissing a "Frog"')
    db.session.add(tobbie)
    tobbie = Card(
        creator=1,   is_question=0,text='A bow and arrow')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='A Homerun')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Farting in a microphone')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Science')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Microwavable Pizza')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Hot Pockets')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='A bag Of flaming poop')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='A T-Rex')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Captain Planet')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Enlisting in the Army')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Becoming a doctor')
    db.session.add(tobbie)
    tobbie = Card(
        creator=1,   is_question=0,text='Massaging feet')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Ro-Sham-Bo')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Flipping a Coin')
    db.session.add(tobbie)
    tobbie = Card(
        creator=6,   is_question=0,text='Drinking puddle water')
    db.session.add(tobbie)
    tobbie = Card(
        creator=1,   is_question=0,text='Carrot Juice')
    db.session.add(tobbie)
    tobbie = Card(
        creator=1,   is_question=0,text='My pet goldfish')
    db.session.add(tobbie)
    tobbie = Card(
        creator=1,   is_question=0,text='Jennifer Lopez')
    db.session.add(tobbie)
    tobbie = Card(
        creator=1,   is_question=0,text="Willy Wonka's Factory")
    db.session.add(tobbie)
    tobbie = Card(
        creator=1,   is_question=0,text='The Spelling Bee')
    db.session.add(tobbie)
    tobbie = Card(
        creator=1,   is_question=0,text='Throwing Up')
    db.session.add(tobbie)
    tobbie = Card(
        creator=1,   is_question=0,text='Dressing up as a cat')
    db.session.add(tobbie)
    tobbie = Card(
        creator=1,   is_question=0,text='Pretending you are a dog')
    db.session.add(tobbie)
    tobbie = Card(
        creator=1,   is_question=0,text='Eating rotten food')
    db.session.add(tobbie)
    tobbie = Card(
        creator=1,   is_question=0,text='Public Bathrooms')
    db.session.add(tobbie)



    q = []
    q6 = Card(creator=1,   is_question=1, text='What is worse than homework?')
    db.session.add(q6)
    q6 = Card(creator=2,   is_question=1, text='What is something that would get you in trouble?')
    db.session.add(q6)
    q6 = Card(creator=1,   is_question=1, text='What is something that would get you out of trouble?')
    db.session.add(q6)
    q6 = Card(creator=2,   is_question=1, text='___ smells worse than poo.')
    db.session.add(q6)
    q6 = Card(creator=1,   is_question=1, text='My mom told me to try harder at ____.')
    db.session.add(q6)
    
    q6 = Card(creator=3,   is_question=1, text='What is your favorite part about the holdiays?')
    db.session.add(q6)
    q6 = Card(creator=4,   is_question=1, text='What can you never have enough of?')
    db.session.add(q6)
    q6 = Card(creator=5,   is_question=1, text='What do you never want to do again?')
    db.session.add(q6)
    q6 = Card(creator=3,   is_question=1, text='They just made ___ Smaller!')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='The best Halloween costume is ___.')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text="After I'm famous, i will ___.")
    db.session.add(q6)
    q6 = Card(creator=4,   is_question=1, text='Heaven is full of ___.')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='___ smells horrbile.')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='Why am I sticky?')
    db.session.add(q6)
    q6 = Card(creator=2,   is_question=1, text='Why are you sticky?')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='Why did I forget to do my homework?')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='Why are pirates always after booty?')
    db.session.add(q6)
    q6 = Card(creator=4,   is_question=1, text='Introducting Extreme ___.')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='I hate it when people ___.')
    db.session.add(q6)
    q6 = Card(creator=3,   is_question=1, text='Dress-code requires you to wear a ___.')
    db.session.add(q6)
    q6 = Card(creator=3,   is_question=1, text='I just got a ___ and it is great!')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='I just got a ___ and it is horrible☣︎')
    db.session.add(q6)
    q6 = Card(creator=4,   is_question=1, text='Disney came out with a ___ movie.')
    db.session.add(q6)
    q6 = Card(creator=5,   is_question=1, text='I hate it when my mom ___.')
    db.session.add(q6)
    q6 = Card(creator=5,   is_question=1, text='I bet there are ___ on the moon.')
    db.session.add(q6)
    q6 = Card(creator=5,   is_question=1, text='Death by ___ would be the worst.')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='Why do I hurt?')
    db.session.add(q6)

    q6 = Card(creator=2,   is_question=1, text='Why do you hurt?')
    db.session.add(q6)
    q6 = Card(creator=6,   is_question=1, text='My last text was about a ___.')
    db.session.add(q6)
    q6 = Card(creator=6,  is_question=1, text='My pet lizard is great at ___.')
    db.session.add(q6)

    q6 = Card(creator=1,   is_question=1, text='What is something you mom loves?')
    db.session.add(q6)

    q6 = Card(creator=2,   is_question=1, text='What is something your dad hates?')
    db.session.add(q6)

    q6 = Card(creator=2,   is_question=1, text='What is next?')
    db.session.add(q6)

    q6 = Card(creator=1,   is_question=1, text='I went to ___ and all i got was this t-shirt.')
    db.session.add(q6)
    q6 = Card(creator=1,   is_question=1, text='___ made me almost throw up.')
    db.session.add(q6)
    q6 = Card(creator=1,   is_question=1, text='___ is the prettiest thing I have ever seen.')
    db.session.add(q6)
    q6 = Card(creator=2,   is_question=1, text='What do sheep dream of?')
    db.session.add(q6)
    q6 = Card(creator=2,   is_question=1, text='What is the best?')
    db.session.add(q6)
    q6 = Card(creator=3,   is_question=1, text='What is the worst?')
    db.session.add(q6)
    q6 = Card(creator=3,   is_question=1, text='Superman actually is afraid of ___.')
    db.session.add(q6)
    q6 = Card(creator=4,   is_question=1, text='Even Batman runs when ___ comes.')
    db.session.add(q6)
    q6 = Card(creator=4,   is_question=1, text='What would I rather be doing right now?')
    db.session.add(q6)
    q6 = Card(creator=5,   is_question=1, text='Everyone likes ___ more than dogs.')
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