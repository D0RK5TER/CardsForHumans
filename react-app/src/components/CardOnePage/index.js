import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import OpenModalButton from '../ModalButton'
import CardEdit from '../CardEditModal';
import { thunkGetCard } from '../../store/cards';

export default function OneCard() {
    const dispatch = useDispatch()
    const card = useSelector(state => state.cards)
    const {idx} = useParams()
    useEffect(() => {
        dispatch(thunkGetCard(idx ))
    }, [])
    // console.log(idx)
    // const sessionUser = useSelector(state => state.user);
    return (
        <div>
            <div>
                {card[idx]?.text}
            </div>
            <div>
                {card[idx]?.icon}
            </div>
            <div>
                Logo Here
            </div>
            <OpenModalButton
                buttonText="Edit"
                modalComponent={<CardEdit card={card[idx]} />}
            />
        </div>
    );
}

