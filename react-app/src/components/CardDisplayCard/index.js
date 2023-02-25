import { useEffect, useState } from 'react';
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
import '../../0css/carddisplay.css'

export default function CardDisplay({ cards, title }) {

    const dispatch = useDispatch()
    const history = useHistory()
    const [cardmeme, setCardmeme] = useState(cards)
    const [a, b, c, ...rest] = cardmeme


    const handleIt = () => {
        let car = [b, c, ...rest]
        setCardmeme(car)
        // console.log('heyyyyy')
    }
    // const selectIt = () => {
    //     console.log('yyyyyyyeh')
    //     setCardmeme(cardmeme)
    // }
    //     // e.preventDefault()
    //     // // console.log(x)
    //     // console.log('enter here')
    //     // console.log(title)
    //     // if (title.includes('Pick')) {
    //     const data = await dispatch(thunkMyInfo())
    //     //     console.log('enter here')
    //     setCardmeme(data)
    //     // }
    //     // return 0
    //     //dispath for add card to deck and then remove from cardmeme and continue
    // }
    return (
        <div id='card-display-whole'>
            <div id='card-display-header'>
                {title}
            </div>
            <div className='card-display-cards'>

                <div>
                    <CardCard card={a} make={1} />
                </div>

                <div>
                    <CardCard card={b} make={1} />
                </div>
                <div>
                    <CardCard card={c} make={1} />
                </div>
                <div>

                    {rest?.length ? <div id='display-next' onClick={handleIt}>
                        ►
                    </div> : <></>}
                </div>
            </div>

        </div>

    )
}
