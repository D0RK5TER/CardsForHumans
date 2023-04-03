import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetCard, thunkDeleteCard } from '../../store/cards';
import { thunkMakePrint } from '../../store/prints';
import { thunkMakeFav, thunkDeleteFav, thunkMyInfo } from '../../store/myprofile';
import CardCard from '../CardCard';
import '../../0css/onecard.css'
import heart from '../../0assets/like.png'
import noheart from '../../0assets/likenot.png'
import broheart from '../../0assets/likebreak.png'
import DeckCardModal from '../DeckCardCreateModal';
import OpenModalButton from '../ModalButton';
import CardDisplay from '../CardDisplayCard';

export default function OneCard() {
    const history = useHistory()
    const dispatch = useDispatch()
    const [errors, setErrors] = useState([])
    const [rend, setRend] = useState(false)
    const [tog, setTog] = useState(heart)
    const card = useSelector(state => state.cards)
    const user = useSelector(state => state.user)
    let decks = useSelector(state => state.myprofile?.decks)

    const { idx } = useParams()
    useEffect(() => {
        dispatch(thunkGetCard(idx))
    }, [rend])
    const cancelIt = async (e) => {
        e.preventDefault()
        if (window.confirm('Are you sure?')) {
            const data = await dispatch(thunkDeleteCard(card[idx]?.id))
            data.ok ? await dispatch(thunkMyInfo()) || history.push(`/profile`) : window.alert('Something Went Wrong!')
        }
    }
    const printIt = async () => {
        const data = await dispatch(thunkMakePrint({ card: +idx }))
        !data?.errors ? setRend(!rend) : setErrors(data.errors)
    }

    const likeIt = async () => {
        const data = await dispatch(thunkMakeFav({ card: +idx }))
        !data?.errors ? setRend(!rend) : setErrors(data.errors)
    }
    const unlikeIt = async () => {
        const data = await dispatch(thunkDeleteFav(+idx))
        !data?.errors ? setRend(!rend) : setErrors(data.errors)
    }
    return (
        <>
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
                            <div id='edit-modal2' onClick={likeIt}>
                                <img src={noheart} />
                            </div>
                        </> :
                        <>
                            <div id='edit-modal2' onClick={unlikeIt} onMouseEnter={() => setTog(broheart)} onMouseLeave={() => setTog(heart)}>
                                <img src={tog} />
                            </div>
                        </>
                    }
                    <div>
                        <OpenModalButton
                            buttonText="Add 2 Deck"
                            location='edit-modal2'
                            modalComponent={<DeckCardModal idx={idx} setRend={setRend} rend={rend} decks={decks}/>}
                        />
                    </div>
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
                        T-otal  Printe-D
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
        {card[idx]?.in? <CardDisplay cards={card[idx]?.in} deck={1} title='In these decks'/>:<></> }
        </>
    );
}

