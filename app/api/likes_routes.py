from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import  db,  Favorite, User, Card
from app.forms import LikeForm


like_routes = Blueprint('like', __name__)



@like_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_fav(id):    
    likez = User.query.get(current_user.id)
    if len(likez.favorites):
        newLL = [c for c in likez.favorites if c.id!=id]
        likez.favorites = newLL
        db.session.commit()
        return {'likes': [c.basic() for c in likez.favorites]}
    else:
        return {'errors': ['What you trying to do?!']}, 401



# @like_routes.route('/all')
# @login_required
# def all_decks():
#     decks = Deck.query.all().limit(30)
#     return {'decks': [d.basic() for d in decks]}



@like_routes.route('', methods=['POST'])
@login_required
def make_fav():
    form = LikeForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # print(form.data, '!!*!**!*!*!**!*!*!**!*!*!*!*')
    if form.validate_on_submit():
        user = User.query.get(current_user.id)
        card = Card.query.get(form.data['card'])
        if form.data['card'] not in user.likes()['likes']:
            user.favorites.append(card)
            db.session.commit()
            return  card.basic()
        else:
            return {'errors': ['You already like it...']}, 401

    else:
        return {'errors': [form.errors]}, 401




# @like_routes.route('')
# def get_Likes():
#     history = Favorite.query.filter(Favorite.user==current_user.id).all() 
#     if len(history):
#         return {'Likes': [p.cards() for p in history]}
#     else:
#         return {'errors': ['Your clean...Too clean...']}

