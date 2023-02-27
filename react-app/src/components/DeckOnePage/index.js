import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OpenModalButton from '../ModalButton'
import { thunkDeleteDeck, thunkGetDeck } from '../../store/decks';
import { thunkMyInfo } from '../../store/myprofile';
import '../../0css/onecard.css';
import DeckCard from '../DeckCard';
import { ageMinutes } from '../../0utils/funcs';
import CardDisplay from '../CardDisplayCard';

export default function OneDeck() {
    const history = useHistory()
    const dispatch = useDispatch()
    const deck = useSelector(state => state.decks)
    const usefav = useSelector(state => state.user.favorites)
    const { idx } = useParams()
    useEffect(() => {
        dispatch(thunkGetDeck(idx))
    }, [idx])

    const cancelIt = async (e) => {
        e.preventDefault()
        if (window.confirm('Are you sure?')) {
            const data = await dispatch(thunkDeleteDeck(deck[idx]?.id))
            // console.log(data)
            data.ok ? await dispatch(thunkMyInfo()) || history.push(`/profile`) : window.alert('Something Went Wrong!')
        }
    }
    // console.log(usefav)
    return (

        <div>

            <div id='one-card-whole'>
                <DeckCard deck={deck[idx]} />
                <div id='one-card-right'>
                    <div >
                        <>
                            <div id='edit-modal' onClick={() => history.push(`/deck/${idx}/edit`)}>
                                Edit
                            </div>
                        </>
                        <>
                            <div id='delete-butt' onClick={cancelIt}>
                                Delete
                            </div>
                        </>
                    </div>
                    <div id='one-card-info'>
                        <div className='info-box-card two'>
                            Counting Cards:
                            <div>
                                {deck[idx]?.cards?.length}
                            </div>
                        </div>
                        <div className='info-box-card two'>
                             Minutes Alive:
                            <div>
                                {deck[idx] && ageMinutes(deck[idx]?.created)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <CardDisplay cards={usefav ? usefav : []} title='Favs:'/> */}


        </div >
    );
}

