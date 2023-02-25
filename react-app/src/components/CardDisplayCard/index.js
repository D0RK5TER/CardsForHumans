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

export default function CardDisplay({ cards, title, deck_id }) {

    const dispatch = useDispatch()
    const history = useHistory()
    const [cardmeme, setCardmeme] = useState(cards)
    const [a, b, c, ...rest] = cardmeme
    const handleIt = () => {
        let car = [b, c, ...rest]
        setCardmeme(car)
        console.log('heyyyyy')
    }
    async function selectIt() {
        // console.log(x)
        if (title.includes('Pick')) {
            // const data = await dispatch()
        }
        //dispath for add card to deck and then remove from cardmeme and continue
    }
    return (
        <div id='card-display-whole'>
            <div id='card-display-header'>
                {title}
            </div>
            <div className='card-display-cards'>
                <div onClick={selectIt}>
                    <CardCard card={a} make={1} />
                </div>
                <div>
                    <CardCard card={b} make={1} />
                </div>
                <div>
                    <CardCard card={c} make={1} />
                </div>
                {rest?.length ? <div id='display-next' onClick={handleIt}>
                    ►
                </div> : <></>}
            </div>

        </div>

    )
}
