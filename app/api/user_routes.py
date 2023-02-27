from flask import Blueprint, jsonify
from flask_login import current_user, login_required
from app.models import User

user_routes = Blueprint('user', __name__)


# @user_routes.route('/')
# @login_required
# def users():
#     """
#     Query for all users and returns them in a list of user dictionaries
#     """
#     users = User.query.all()
#     return {'users': [user.basic() for user in users]}



@user_routes.route('/current')
@login_required
def curr_user():
    user = User.query.get(current_user.id)
    # ret = user.current_user()
    return user.current_user()


@user_routes.route('/<int:id>')
@login_required
def user_detail(id):
    user = User.query.get(id)
    return user.users_all_details()



