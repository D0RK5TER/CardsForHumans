from flask_wtf import FlaskForm
from wtforms import IntegerField, SubmitField
from wtforms.validators import DataRequired

class PrintCardForm(FlaskForm):
    card = IntegerField(
        'card', validators=[DataRequired(message='Select some cards to print!')])
 