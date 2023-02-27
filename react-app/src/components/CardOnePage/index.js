import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetCard, thunkDeleteCard } from '../../store/cards';
import { thunkMakePrint } from '../../store/prints';
import { thunkMakeFav, thunkDeleteFav, thunkMyInfo } from '../../store/myprofile';
import CardCard from '../CardCard';
import '../../0css/onecard.css'


export default function OneCard() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [errors, setErrors] = useState([])
    const [rend, setRend] = useState(false)
    const card = useSelector(state => state.cards)
    const user = useSelector(state => state.user)
    const { idx } = useParams()
    useEffect(() => {
        dispatch(thunkGetCard(idx))
    }, [rend])
    const cancelIt = async (e) => {
        e.preventDefault()
        if (window.confirm('Are you sure?')) {
            const data = await dispatch(thunkDeleteCard(card[idx]?.id))
            // console.log(data)
            // data.ok ? dispatch(thunkMyInfo()) : window.alert('Something Went Wrong!')
            data.ok ? dispatch(thunkMyInfo()) && history.push(`/profile`) : window.alert('Something Went Wrong!')
        }
    }
    const printIt = async () => {
        const data = await dispatch(thunkMakePrint({ card: +idx }))
        // !data?.errors ? window.print() || setRend(!rend) : setErrors(data.errors)
        !data?.errors ? setRend(!rend) : setErrors(data.errors)
    }

    const likeIt = async () => {
        const data = await dispatch(thunkMakeFav({ card: +idx }))
        !data?.errors ? setRend(!rend) : setErrors(data.errors)
    }
    const unlikeIt = async () => {
        const data = await dispatch(thunkDeleteFav(+idx))
        // console.log(data)
        !data?.errors ? setRend(!rend) : setErrors(data.errors)
    }
    // console.log(idx)
    // const sessionUser = useSelector(state => state.user);
    return (
        <div id='one-card-whole'>
            <div id='one-card-card-cont'>
                <CardCard card={card[idx]} />
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
            <div id='one-card-right'>
                <div >
                    <>
                        <div id='edit-modal' onClick={printIt}>
                            Print
                        </div>
                    </>
                    {card[idx] && !card[idx]?.who_likes?.includes(user?.id) ?
                        <>
                            <div id='edit-modal' onClick={likeIt}>
                                ❤︎
                            </div>
                        </> :
                        <>
                            <div
                                style={{ textDecoration: 'line-through', textDecorationThickness: '.31vw', textDecorationColor: 'red' }}
                                id='edit-modal' onClick={unlikeIt}>
                                ❤︎
                            </div>
                        </>
                    }
                </div>

                <div id='one-card-info'>
                    <div className='info-box-card two'>
                        T-imes  Like-D
                        <div className='info-box-card'>
                            {card[idx]?.likes}
                        </div>
                    </div >
                    <div className='info-box-card two'>
                        D-eck Coun-T
                        <div className='info-box-card'>
                            {card[idx]?.in?.length}
                        </div>
                    </div >
                    <div className='info-box-card two' >
                        T-he  Printe-D
                        <div className='info-box-card'>
                            {card[idx]?.printed}
                        </div>
                    </div>

                </div>
            </div>
            <div className="error-cont">
                {errors?.map((error) => (
                    <div style={{ color: 'white' }} classname='error-message'>{error}</div>
                ))}
            </div>
        </div>
    );
}

