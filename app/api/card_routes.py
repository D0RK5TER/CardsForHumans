from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Card

card_routes = Blueprint('cards', __name__)

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



