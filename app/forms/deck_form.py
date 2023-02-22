from flask_wtf import FlaskForm
from wtforms import StringField, BooleanField, SubmitField
from wtforms.validators import DataRequired

class DeckForm(FlaskForm):
    title = StringField(
        'title', validators=[DataRequired(message='Decks need a name!')])
    icon = StringField(validators=[DataRequired('Select an Icon!')])
    submit = SubmitField()
