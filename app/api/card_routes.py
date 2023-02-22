from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Card, db
from app.forms import CardForm
card_routes = Blueprint('card', __name__)



@card_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_card(id):    
    card = Card.query.get(id)
    if card.creator==current_user.id:
        db.session.delete(card)
        db.session.commit()
        return {'message': 'Sucessfully Deleted'}
    else:
        return {'errors': ['Not Your Card!']}, 401



@card_routes.route('/all')
@login_required
def all_cards():
    cards = Card.query.all().limit(30)
    return {'cards': [c.basic() for c in cards]}


@card_routes.route('/<int:id>')
@login_required
def one_card(id):
    card = Card.query.get(id)
    return card.extra()

@card_routes.route('', methods=['POST'])
@login_required
def make_card():
    form = CardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        card = Card(
            creator=current_user.id,
            text=form.data['text'],
            is_question=form.data['is_question']
        )
        db.session.add(card)
        db.session.commit()
        return  card.basic()

    return {'errors': form.errors}, 401



@card_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_card(id):
    form = CardForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        card = Card.query.get(id)
        card.text = request.json['text']
        if card.creator==current_user.id:
            db.session.commit()
            return card.basic()
        else:
            return {'errors': ['Not Your Card!']}, 401

    return {'errors': form.errors}, 401


