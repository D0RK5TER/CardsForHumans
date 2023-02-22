import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { thunkMakeCard } from '../../store/cards';

export default function CardCreate() {
    const dispatch = useDispatch();
    const history = useHistory()
    const [text, setText] = useState('')
    const [is_question, setIs_question] = useState(false)
    const [errors, setErrors] = useState([])

    const handleIt = async (e) => {
        e.preventDefault()
        const data = await dispatch(thunkMakeCard({ text, is_question }))
        data.ok ? history.push(`/card/${data.id}`) : setErrors(data.errors)
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
                    <button type='submit'>Submit Card</button>
                </form>
                <div className="error-cont">
                    {errors.map((error) => (
                        <div classname='error-message'>{error}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

