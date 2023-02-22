
from flask_wtf import FlaskForm
from wtforms import IntegerField, SubmitField
from wtforms.validators import DataRequired

class PrintDeckForm(FlaskForm):
    deck = IntegerField(
        'deck', validators=[DataRequired(message='Select a deck!')])
    submit = SubmitField()
