import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { thunkMakeCard } from '../../store/cards';
import CardCard from '../CardCard';
import '../../0css/cardcreate.css'

export default function CardCreate() {
    const dispatch = useDispatch();
    const history = useHistory()
    const [text, setText] = useState('')
    const [is_question, setIs_question] = useState(0)
    const [errors, setErrors] = useState([])
    const one = { height: 'fit-content', color: 'black', backgroundColor: 'white', 'width': '2.75vw', }
    const zero = { height: 'fit-content', color: 'white', backgroundColor: 'black', 'width': '2.75vw', border: '1px solid white' }
    const handleIt = async (e) => {
        e.preventDefault()
        const data = await dispatch(thunkMakeCard({ text, is_question }))
        data.id ? history.push(`/${data.id}`) : setText(data)
    }

    return (
        <div id='one-card-whole'>
            <div>
                <CardCard card={{ text, is_question }} make={1} />
                <div
                    id='edit-modal'
                    style={is_question ? one : zero}
                    onClick={() => setIs_question(is_question ? 0 : 1)}
                >
                    {is_question ? <>A!</> : <>Q?</>}
                </div>
            </div>
            <div id='one-card-right'>
                <div id='create-card-right'>
                    <form id='create-card-right'
                        onSubmit={handleIt}>
                        {/* <div> */}
                        <div>Make Your Own Card!</div>
                        <textarea
                            id='card-create-textarea'
                            type='textarea'
                            value={text}
                            pattern=".*\w.*"
                            onChange={(e) => setText(e.target.value)}
                            placeholder={is_question ? 'Worst Dinner?' : 'Tomato Soup.'}
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

