import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OpenModalButton from '../ModalButton'
import CardEdit from '../CardEditModal';
import { thunkGetDeck } from '../../store/decks';
import '../../0css/onecard.css';
import DeckCard from '../DeckCard';


export default function OneDeck() {
    const dispatch = useDispatch()
    const deck = useSelector(state => state.decks)
    const { idx } = useParams()
    useEffect(() => {
        dispatch(thunkGetDeck(idx))
    }, [idx])
    // console.log(idx)
    // const sessionUser = useSelector(state => state.user);
    return (
        <div id='one-card-whole'>
            <DeckCard deck={deck[idx]} />
            <div id='one-card-right'>
                <div >
                    <OpenModalButton
                        buttonText="Edit"
                        loation='edit-modal'
                        modalComponent={<CardEdit card={null} />}
                    />
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
                            {deck[idx]?.created}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

