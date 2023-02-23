import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OpenModalButton from '../ModalButton'
import { thunkDeleteDeck, thunkGetDeck } from '../../store/decks';
import '../../0css/onecard.css';
import DeckCard from '../DeckCard';
import { ageMinutes } from '../../0utils/funcs';


export default function OneDeck() {
    const history = useHistory()
    const dispatch = useDispatch()
    const deck = useSelector(state => state.decks)
    const { idx } = useParams()
    useEffect(() => {
        dispatch(thunkGetDeck(idx))
    }, [idx])

    const cancelIt = async (e) => {
        e.preventDefault()
        if (window.confirm('Are you sure?')) {
            const data = await dispatch(thunkDeleteDeck(deck[idx]?.id))
            // console.log(data)
            data.ok ? history.push(`/profile`) : window.alert('Something Went Wrong!')
        }
    }
    return (
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
                        <div id='edit-modal' onClick={cancelIt}>
                            Delete
                        </div>
                    </>
                </div>

                <div id='one-card-info'>
                    <div>
                        Counting Cards:
                        <div>
                            {deck[idx]?.cards?.length}
                            {/* {card[idx]?.in?.length} */}
                        </div>
                    </div>
                    <div>
                        Counting Minutes:
                        <div>
                            {deck[idx] && ageMinutes(deck[idx]?.created)}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

