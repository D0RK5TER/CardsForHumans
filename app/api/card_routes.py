from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Card, db
from app.forms import CardForm
card_routes = Blueprint('card', __name__)
from .auth_routes import validation_errors_to_error_messages
import random


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

@card_routes.route('/splash')
def splash_cards():
    questions = Card.query.filter(Card.is_question == 1).all()
    answers = Card.query.filter(Card.is_question == 0).all()
    i = 0
    q = []
    while i < 6:
        q.append(answers[random.randint(0,len(answers)-1)].basic())
        i+=1
    while i < 10:
        q.append(questions[random.randint(0,len(questions)-1)].basic())
        i+=1
    return {'cards' : q}

@card_routes.route('/random')
def rando_cards():
    questions = Card.query.filter(Card.is_question == 0).all()
    answers = Card.query.filter(Card.is_question == 1).all()
    i = 0
    q = []
    a = []
    while i < 40:
        q.append(questions[random.randint(0,len(questions)-1)].basic())
        i+=1
    while i < 40:
        a.append(answers[random.randint(0,len(answers)-1)].basic())
        i+=1
    ret = {
        'questions': q,
        'answers' : a
    }
    return ret


@card_routes.route('/<int:id>')
@login_required
def one_card(id):
    card = Card.query.get(id)
    return card.one_card()

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

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401



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

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


