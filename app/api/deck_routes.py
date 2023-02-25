from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Deck, db,  Card
from app.forms import DeckForm


deck_routes = Blueprint('deck', __name__)



@deck_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_deck(id):    
    deck = Deck.query.get(id)
    if deck.owner==current_user.id:
        db.session.delete(deck)
        db.session.commit()
        return {'message': 'Sucessfully Deleted'}
    else:
        return {'errors': ['Nacho deck!']}, 401



# @deck_routes.route('/all')
# @login_required
# def all_decks():
#     decks = Deck.query.all().limit(30)
#     return {'decks': [d.basic() for d in decks]}


@deck_routes.route('/<int:id>')
@login_required
def one_deck(id):
    deck = Deck.query.get(id)
    if deck:
        return {'deck':deck.deck_cards()}
    else:
        return {'errors': ['That aint no deck i heard of']}

@deck_routes.route('', methods=['POST'])
@login_required
def make_deck():
    form = DeckForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        deck = Deck(
            owner=current_user.id,
            title=form.data['title'],
            icon=form.data['icon'],
        )
        db.session.add(deck)
        db.session.commit()
        return  deck.basic()

    return {'errors': form.errors}, 401



@deck_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_deck(id):
    form = DeckForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        deck = Deck.query.get(id)
        deck.title = request.json['title']
        deck.icon = request.json['icon']
        if deck.owner==current_user.id:
            db.session.commit()
            return deck.basic()
        else:
            return {'errors': ['Not Your deck!']}, 401

    return {'errors': form.errors}, 401



@deck_routes.route('/<int:id>/card', methods=['POST'])
@login_required
def make_deck_card(id):
    # form = DeckForm()
    deck = Deck.query.get(id)
    card = Card.query.get(request.json['card'])
    # form['csrf_token'].data = request.cookies['csrf_token']
    if deck and card:
        if (current_user.id != deck.owner):
            return {'errors': ['Notcha Deck']}
        deck.cards.append(card)
        db.session.commit()
        return  deck.basic()

    return {'errors': ['Your looking for somwthing that doesnt want to be found']}, 401
