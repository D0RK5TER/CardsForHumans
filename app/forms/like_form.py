from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired

class LikeForm(FlaskForm):
    card = IntegerField(
        'card', validators=[DataRequired(message='What?')])
 