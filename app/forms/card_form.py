from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, SubmitField
from wtforms.validators import DataRequired

class CardForm(FlaskForm):
    text = StringField(
        'text', validators=[DataRequired(message='You have to fill out the text!')])
    is_question = BooleanField('is_question')
    submit = SubmitField()
