import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import { thunkMyBrewery } from '../../store/brewery';
// import BreweryCard from '../BreweryCard';
// import BreweryFormModal from '../BreweryFormModal';
import OpenModalButton from '../OpenModalButton';
// import BadgeFormModal from '../BadgeFormModal';

export default function MyProfile() {
    const dispatch = useDispatch()
    const history = useHistory()
    let user = useSelector(state => state.user)
    // console.log('%@!%^#^@#$%^!@$#^%!@$^%#$@!%^#$^@!', myBreweries)
    let userId = user?.id
    // let userId = 10
    let mybreweries = useSelector(state => state.brewery?.mybreweries)

    // useEffect(() => async () => {
    //     await dispatch(thunkMyBrewery(userId))
    // }, [dispatch])
    useEffect(() => {
        dispatch(thunkMyBrewery(userId))
    }, [dispatch])

    return (
        <div id='my-brewery-page'>
            <div className='my-brewery-title'>
                <div className='my-page-header'>
                    My Breweries Page
                </div>
                <div className='below-header'>
                    <OpenModalButton
                        buttonText="Make a Brewery"
                        //   onItemClick={closeMenu}
                        modalComponent={<BreweryFormModal id={user?.id} />}
                    />

                </div>
            </div>
            <>

                {mybreweries?.length ? mybreweries.map(brewery =>
                    <div>
                        <BreweryCard brewery={brewery} user={user} />
                        
                    </div>
                ) :
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'center', width: '100vw' }}>
                        <h1 style={{ paddingTop: '5vw', fontFamily: 'Bold' }}>Sorry! Out Of Luck!</h1>
                        <h3 style={{ paddingTop: '8vw' }}>Try Making a Brewery!</h3>
                    </div>

                }
            </>

            {/* {mybreweries?mybreweries[0]?.id: null}
            <button onClick={() => history.push(`/brewery/${mybreweries[0]?.id}`)}>
                Edit your beers
            </button> */}

        </div>
    )
}
