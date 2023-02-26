import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import { thunkMyBrewery } from '../../store/brewery';
// import BreweryCard from '../BreweryCard';
// import BreweryFormModal from '../BreweryFormModal';
import OpenModalButton from '../ModalButton';
import { thunkMyInfo } from '../../store/myprofile'
import CardCard from '../CardCard';
import DeckCard from '../DeckCard';
import CardDisplay from '../CardDisplayCard';
// import BadgeFormModal from '../BadgeFormModal';
import '../../0css/usercurr.css'

export default function UserCurrent() {
    const dispatch = useDispatch()
    const history = useHistory()
    let user = useSelector(state => state.myprofile)
    // useEffect(() => async () => {
    //     await dispatch(thunkMyBrewery(userId))
    // }, [dispatch])
    useEffect(() => {
        dispatch(thunkMyInfo())
    }, [])
    console.log(user.cards_made)
    return (
        <div id='user-curr-whole'>
            <div className='user-curr-title'>

                <div>
                    Welcome
                    <div className='user-curr-name'>
                        {user?.username}
                    </div>
                </div>
                Here are your belongings!
            </div>
            <div id='user-curr-cards'>
                <div id='user-curr-cards-title'>
                    <div>
                        C
                    </div>
                    <div>
                        A
                    </div>
                    <div>
                        R
                    </div>
                    <div>
                        D
                    </div>
                    <div>
                        S
                    </div>
                </div>

                <div className='below-header'>
                    {user?.cards_made ?
                        <div>
                            <CardDisplay cards={user?.cards_made} />
                        </div>
                        :
                        <div>Try making some cards!</div>
                    }
                </div>
            </div>
            <div id='user-curr-cards'>
                <div id='user-curr-cards-title'>
                    <div>
                        D
                    </div>
                    <div>
                        E
                    </div>
                    <div>
                        C
                    </div>
                    <div>
                        K
                    </div>
                    <div>
                        S
                    </div>
                </div>
                <div className='below-header'>
                    {user?.decks ?
                        <div>
                            {//needs to be a seperate disp[lay]
                            }
                            <CardDisplay cards={user?.decks} deck={1} />
                        </div>
                        :
                        <div>Try making a deck!</div>
                    }
                </div>
            </div>
            <div id='user-curr-cards'>
                <div id='user-curr-cards-title'>
                    <div>
                        F
                    </div>
                    <div>
                        A
                    </div>
                    <div>
                        V
                    </div>
                    <div>
                        E
                    </div>
                    <div>
                        S
                    </div>
                </div>
                <div className='below-header'>
                    {user?.decks ?
                        <div>
                            {//needs to be a seperate disp[lay]
                            }
                            <CardDisplay cards={user?.favorites} />
                        </div>
                        :
                        <div>Try and like something!</div>
                    }
                </div>
            </div>
            <div id='user-curr-favs'>
                <div id='user-curr-fav-title'>
                    FAVORITES
                </div>
                <div className='below-header'>
                    {user?.favorites ? user.favorites.map(x => (
                        <>
                            <CardCard card={x} />
                        </>
                    ))
                        :
                        <div>Try making a deck!</div>
                    }
                </div>
            </div>
            {/* <div>
                Print History:
                <div className='below-header'>
                    {user?.prints ? user.prints.map(x => (
                        <>
                            ---card: {x?.card} was printed--
                        </>
                    ))
                        :
                        <div>Try making a deck!</div>
                    }
                </div>
            </div> */}

        </div>

    )
}
