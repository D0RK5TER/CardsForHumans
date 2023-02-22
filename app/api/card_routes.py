from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Card, db
from app.forms import CardForm
card_routes = Blueprint('card', __name__)

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
        # print(newbrewery, '*^*^*^*^*^*^*^*^*^*^**^*^*^*^*^*')
        db.session.add(card)
        db.session.commit()
        return  card.basic()

    return {'errors': ['Unable to validate(info/user)']}, 401




