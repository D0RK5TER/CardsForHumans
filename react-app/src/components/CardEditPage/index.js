import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { thunkEditCard } from '../../store/cards';
import CardCard from '../CardCard';
import '../../0css/cardcreate.css'

export default function CardEdit() {
    const dispatch = useDispatch();
    const history = useHistory()
    const { idx } = useParams()
    const card = useSelector(state => state.cards[idx])
    const [text, setText] = useState(card?.text)
    const [is_question, setIs_question] = useState(card?.is_question)
    const [errors, setErrors] = useState([])
    
    const handleIt = async (e) => {
        e.preventDefault()
        const data = await dispatch(thunkEditCard({ text, is_question }, card?.id))
        data.ok ? history.push(`/${data.id}`) : setErrors(data.errors)
    }

    return (
        <div id='one-card-whole'>
            <div>
                <CardCard card={{ text }} />
            </div>
            <div id='one-card-right'>
                <div
                    onClick={() => setIs_question(!is_question ? 0 : 1)}
                >
                    This is a  -tern Answer/Question
                </div>
                <div id='create-card-right'>
                    <form id='create-card-right'
                        onSubmit={handleIt}>
                        {/* <div> */}
                        <div>Make Your Own Card!</div>
                        <textarea
                            id='card-create-textarea'
                            type='textarea'
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder='-tern'
                            required
                        />
                        {/* </div> */}
                        {/* <div> */}
                        <button id='edit-modal' type='submit'>Submit</button>
                        {/* </div> */}

                    </form>
                </div>
                <div className="error-cont">
                    {errors?.map((error) => (
                        <div classname='error-message'>{error}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

