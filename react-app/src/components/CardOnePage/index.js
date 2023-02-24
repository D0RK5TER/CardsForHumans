import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetCard, thunkDeleteCard } from '../../store/cards';
import { thunkMakePrint } from '../../store/prints';
import CardCard from '../CardCard';
import '../../0css/onecard.css'


export default function OneCard() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [errors, setErrors] = useState([])
    const card = useSelector(state => state.cards)
    const user = useSelector(state => state.user)
    const { idx } = useParams()
    useEffect(() => {
        dispatch(thunkGetCard(idx))
    }, [])
    const cancelIt = async (e) => {
        e.preventDefault()
        if (window.confirm('Are you sure?')) {
            const data = await dispatch(thunkDeleteCard(card[idx]?.id))
            // console.log(data)
            data.ok ? history.push(`/profile`) : window.alert('Something Went Wrong!')
        }
    }
    const printIt = async () => {
        const data = await dispatch(thunkMakePrint({ card: +idx }))
        !data?.errors ? window.print() : setErrors(data.errors)
    }
    // console.log(idx)
    // const sessionUser = useSelector(state => state.user);
    return (
        <div id='one-card-whole'>
            <CardCard card={card[idx]} />
            <div id='one-card-right'>
                <div >
                    <>
                        <div id='edit-modal' onClick={printIt}>
                            Print
                        </div>
                    </>
                    {user?.id == card[idx]?.made_by ?
                        <>
                            <>
                                <div id='edit-modal' onClick={() => history.push(`/${idx}/edit`)}>
                                    Edit
                                </div>
                            </>
                            <>
                                <div id='delete-butt' onClick={cancelIt}>
                                    Delete
                                </div>
                            </>
                        </>
                        : <></>
                    }
                </div>

                <div id='one-card-info'>
                    <div>
                        D-ecks
                        <div>
                            {card[idx]?.in?.length}
                        </div>
                    </div>
                    <div>
                        Like-D
                        <div>
                            {card[idx]?.likes}
                        </div>
                    </div>

                </div>
            </div>
            <div className="error-cont">
                {errors?.map((error) => (
                    <div style={{color: 'white'}} classname='error-message'>{error}</div>
                ))}
            </div>
        </div>
    );
}

