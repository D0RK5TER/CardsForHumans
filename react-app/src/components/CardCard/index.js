import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../0css/cardcard.css'
import logo from '../../0assets/logo.png'

export default function CardCard({ card }) {
    const history = useHistory()
    // const sessionUser = useSelector(state => state.user);
    return (
        <div id='card-card-whole' onClick={() => history.push(`/${card?.id}`)}>
            <div id='card-card-text'>
                {card?.text}
            </div>
            <div id='card-card-bot'>
                <div id='card-card-logo'>
                    <img src={logo} />
                </div>
                <div id='card-card-name'>
                    Cards for Humans
                </div>
            </div>
        </div>
    );
}

