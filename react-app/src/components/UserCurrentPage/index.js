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
                    {user?.cards_made ? user.cards_made.map(x => (
                        <div>
                            <CardCard card={x} />
                        </div>
                    ))
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
                    {user?.decks ? user.decks.map(x => (
                        <DeckCard deck={x} />
                    ))
                        :
                        <div>Try making a deck!</div>
                    }
                </div>
            </div>
            <div>
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
            </div>
            <div>
                Favorites:
                <div className='below-header'>
                    {user?.favorites ? user.favorites.map(x => (
                        <>
                            ---card: {x?.id} is a fav--
                        </>
                    ))
                        :
                        <div>Try making a deck!</div>
                    }
                </div>
            </div>

        </div>

    )
}
