import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import logo from '../../0assets/logo2.png'
import logo0 from '../../0assets/icons/icon0.png'
import logo1 from '../../0assets/icons/icon1.png'
import logo2 from '../../0assets/icons/icon2.png'
import logo3 from '../../0assets/icons/icon3.png'
import logo4 from '../../0assets/icons/icon4.png'
import logo5 from '../../0assets/icons/icon5.png'
import logo6 from '../../0assets/icons/icon6.png'
import logo7 from '../../0assets/icons/icon7.png'
import logo8 from '../../0assets/icons/icon8.png'
import logo9 from '../../0assets/icons/icon9.png'

import '../../0css/deckcard.css'
export default function DeckCard({ deck, make }) {
    const history = useHistory()
    // const sessionUser = useSelector(state => state.user);
    let alt = +deck?.icon

    alt === 0 ? alt = logo0 :
        alt === 1 ? alt = logo1 :
            alt === 2 ? alt = logo2 :
                alt === 3 ? alt = logo3 :
                    alt === 4 ? alt = logo4 :
                        alt === 5 ? alt = logo5 :
                            alt === 6 ? alt = logo6 :
                                alt === 7 ? alt = logo7 :
                                    alt === 8 ? alt = logo8 :
                                        alt === 9 ? alt = logo9 :
                                            alt = logo0

    // console.log(alt)
    return (
        <div id='deck-card-whole' onClick={!make?() => history.push(`/deck/${deck?.id}`):()=>window.alert('Finish making it before you go to it!')}>
            <div id='deck-card-inner'>
                <div id='deck-card-text'  >
                    {!deck?.title ? <>Deckasaurus</> : deck?.title}
                </div>
                <div id='deck-card-bot'>
                    <div >
                        <img src={alt} id='deck-card-logo' />
                        {/* <img src='logo2'/> */}
                    </div>
                </div>
                {/* hey */}
            </div>
        </div>
    );
}

