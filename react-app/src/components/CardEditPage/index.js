import React, { useState } from 'react';
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
    const card = useSelector(state => state.cards)
    const [text, setText] = useState(card[idx]?.text)
    const [is_question, setIs_question] = useState(card[idx]?.is_question)
    const [errors, setErrors] = useState([])

    const handleIt = async (e) => {
        e.preventDefault()
        const data = await dispatch(thunkEditCard({ text, is_question }, idx))
        !data[0]? history.push(`/${data.id}`) : setText(data[0])
    }

    return (
        <div id='one-card-whole'>
            <div>
                <CardCard card={{ text, is_question: card?.is_question }} />
            </div>
            <div id='one-card-right'>
                <div
                    onClick={() => setIs_question(!is_question ? 0 : 1)}
                >

                </div>
                <div id='create-card-right'>
                    <form id='create-card-right'
                        onSubmit={handleIt}>
                        {/* <div> */}
                        <div>Change It Up!</div>
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
                        <button id='edit-modal' type='submit'>Confirm</button>
                        {/* </div> */}

                    </form>
                </div>

            </div>
        </div>
    );
}

