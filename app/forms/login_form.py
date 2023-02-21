from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    userb = User.query.filter(User.username == email).first()
    if not user and not userb:
        raise ValidationError('Email/Username provided not found.')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    userb = User.query.filter(User.username == email).first()
    # if not user and userb:
    #     raise ValidationError('No such user exists.')
    if user:
        if not user.check_password(password):
            raise ValidationError('Password was incorrect.')
    else: 
        if not userb.check_password(password):
            raise ValidationError('Password was incorrect.')

class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired(), password_matches])