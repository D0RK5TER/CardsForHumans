import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import { thunkMyBrewery } from '../../store/brewery';
// import BreweryCard from '../BreweryCard';
// import BreweryFormModal from '../BreweryFormModal';
import OpenModalButton from '../ModalButton';
import { thunkMyInfo } from '../../store/myprofile'
// import CardCard from '../CardCard';
// import DeckCard from '../DeckCard';
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

    const makecard = ()=>history.push('/create')

    const makedeck = ()=>history.push('/deck/create')

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
                    {user?.cards_made?.length ?
                        <div>
                            <CardDisplay cards={user?.cards_made} />
                        </div>
                        :
                        <h1>Try making some 
                            <p className='nothingyet' onClick={makecard}>
                            CARDS!
                            </p>
                            </h1>
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
                    {user?.decks?.length ?
                        <div>
                            {//needs to be a seperate disp[lay]
                            }
                            <CardDisplay cards={user?.decks} deck={1} />
                        </div>
                        :
                        <h1>Try making a <p className='nothingyet' onClick={makedeck}>
                        DECK!
                        </p></h1>
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
                    {user?.favorites?.length ?
                        <div>

                            <CardDisplay cards={user?.favorites} />
                        </div>
                        :
                        <h1>Try and like <p className='nothingyet' onClick={()=>history.push('/')}>
                        something...
                        </p></h1>
                    }
                </div>
            </div>

        </div>

    )
}
