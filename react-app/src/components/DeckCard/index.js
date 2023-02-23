import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo2 from '../../0assets/logo2.png'
import '../../0css/deckcard.css'
export default function DeckCard({ deck }) {
    const history = useHistory()
    // const sessionUser = useSelector(state => state.user);
    let alt = deck?.icon
    return (
        <div id='deck-card-whole' onClick={() => history.push(`/deck/${deck?.id}`)}>
            <div id='deck-card-inner'>
                <div id='deck-card-text'  >
                    {deck?.title}
                </div>
                <div id='deck-card-bot'>
                    <div id='deck-card-logo'>
                        <img src={alt ? alt : logo2} />
                    </div>
                </div>
                {/* hey */}
            </div>
        </div>
    );
}

