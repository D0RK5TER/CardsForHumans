from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import  db, Print
from app.forms import PrintCardForm


print_routes = Blueprint('print', __name__)



@print_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_print(id):    
    printz = Print.query.get(id)
    if printz.user==current_user.id:
        db.session.delete(printz)
        db.session.commit()
        return {'message': 'Sucessfully Deleted'}
    else:
        return {'errors': ['What you trying to do?!']}, 401



# @print_routes.route('/all')
# @login_required
# def all_decks():
#     decks = Deck.query.all().limit(30)
#     return {'decks': [d.basic() for d in decks]}



@print_routes.route('', methods=['POST'])
@login_required
def make_deck():
    form = PrintCardForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # print(form.data, '!!*!**!*!*!**!*!*!**!*!*!*!*')
    if form.validate_on_submit():
        deck = Print(
            user = current_user.id,
            card=form.data['card']
        )
        db.session.add(deck)
        db.session.commit()
        return  deck.cards()

    return {'errors': form.errors}, 401



@print_routes.route('', methods=['DELETE'])
@login_required
def delete_all():
    history = Print.query.filter(Print.user==current_user.id).all() 
    if len(history):
       [db.session.delete(p) for p in history]
       db.session.commit()
       return {'message': 'Sucessfully Deleted'}
    else:
        return {'errors': ['Who are you?']}, 401

@print_routes.route('')
def get_prints():
    history = Print.query.filter(Print.user==current_user.id).all() 
    if len(history):
        return {'prints': [p.cards() for p in history]}
    else:
        return {'errors': ['Your clean...Too clean...']}

