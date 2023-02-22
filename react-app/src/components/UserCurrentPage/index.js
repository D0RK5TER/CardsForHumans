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
        <div id='my-brewery-page'>
            <div className='my-brewery-title'>
                <div className='my-page-header'>
                    My Info: Id=
                    {user?.id} and email={user?.email}

                </div>
                <div>
                    Cards:
                    <div className='below-header'>
                        {user?.cards_made ? user.cards_made.map(x => (
                            <CardCard card={x} />
                        ))
                            :
                            <div>Try making some cards!</div>
                        }
                    </div>
                </div>
                <div>
                    Decks:
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
            <>

                {/* {mybreweries?.length ? mybreweries.map(brewery =>
                    <div>
                        <BreweryCard brewery={brewery} user={user} />
                        
                    </div>
                ) :
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'center', width: '100vw' }}>
                        <h1 style={{ paddingTop: '5vw', fontFamily: 'Bold' }}>Sorry! Out Of Luck!</h1>
                        <h3 style={{ paddingTop: '8vw' }}>Try Making a Brewery!</h3>
                    </div>

                } */}
            </>

            {/* {mybreweries?mybreweries[0]?.id: null}
            <button onClick={() => history.push(`/brewery/${mybreweries[0]?.id}`)}>
                Edit your beers
            </button> */}

        </div>
    )
}
