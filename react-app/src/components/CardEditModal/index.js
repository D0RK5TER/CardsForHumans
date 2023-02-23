import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { thunkEditCard, thunkDeleteCard } from '../../store/cards';
import { useModal } from "../../context/Modal";

export default function CardEdit({ card }) {
    const dispatch = useDispatch();
    const history = useHistory()
    const [text, setText] = useState(card?.text)
    const [is_question, setIs_question] = useState(card?.is_question)
    const [errors, setErrors] = useState([])
    const { closeModal } = useModal()

    const handleIt = async (e) => {
        e.preventDefault()
        const data = await dispatch(thunkEditCard({ text, is_question }, card?.id))
        data.ok ? history.push(`/${data.id}`) || closeModal() : setErrors(data.errors)
    }
    const cancelIt = async (e) => {
        e.preventDefault()
        const data = await dispatch(thunkDeleteCard(card?.id))
        data.ok ? history.push(`/profile`) || closeModal() : setErrors(data.errors)
    }
    return (
        <div>
            <div>
                -tern{ } Card Demo
            </div>
            <div>
                <div
                    onClick={() => setIs_question(!is_question)}
                >
                    This is a  -tern Answer/Question
                </div>
                <form onSubmit={handleIt}>
                    -tern{ }
                    <input
                        type='textarea'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder='-tern'
                        required
                    />
                    <div>
                        Logo Here
                    </div>
                    <button type='submit'>ChangƏ</button>
                    <button type='button' onClick={cancelIt}>Destroy!</button>
                </form>
                <div className="error-cont">
                    {errors?.map((error) => (
                        <div classname='error-message'>{error}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

