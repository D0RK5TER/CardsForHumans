import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OpenModalButton from '../ModalButton'
import CardEdit from '../CardEditModal';
import { thunkGetCard } from '../../store/cards';
import CardCard from '../CardCard';
import '../../0css/onecard.css'


export default function OneCard() {
    const dispatch = useDispatch()
    const card = useSelector(state => state.cards)
    const { idx } = useParams()
    useEffect(() => {
        dispatch(thunkGetCard(idx))
    }, [])
    // console.log(idx)
    // const sessionUser = useSelector(state => state.user);
    return (
        <div id='one-card-whole'>
            <CardCard card={card[idx]} />
            <div id='one-card-right'>
                <div >
                    <OpenModalButton
                        buttonText="Edit"
                        loation='edit-modal'
                        modalComponent={<CardEdit card={card[idx]} />}
                    />
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
        </div>
    );
}

