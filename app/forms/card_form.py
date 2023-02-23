from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired

class CardForm(FlaskForm):
    text = StringField(
        'text', validators=[DataRequired(message='You have to fill out the text!')])
    is_question = IntegerField('is_question')
    submit = SubmitField()
