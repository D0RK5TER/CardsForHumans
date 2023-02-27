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

export default function CardDisplay({ cards, title, deck }) {

    const dispatch = useDispatch()
    const history = useHistory()
    const [cardmeme, setCardmeme] = useState(cards)
    // const [rend, setRend] = useState(true)
    const [a, b, c, ...rest] = cardmeme


    const handleIt = () => {
        if (rest?.length) {
            let car = [b, c, ...rest]
            setCardmeme(car)
        }
        else setCardmeme([b, c, ...cards])
    }
    console.log(a, b, c)
    return (
        deck ?
            <div id='card-display-whole'>
                <div id='card-display-header'>
                    {title}
                </div>
                <div className='card-display-cards'>
                    <div>

                        {/* {!rend ? <div id='display-next' onClick={handleIt}>
                            ◀︎
                        </div> : <></>} */}
                    </div>
                    <div>
                        <DeckCard deck={a} />
                    </div>

                    {b ? <div>
                        <DeckCard deck={b} />
                    </div> : <></>}
                    {c ? <div>
                        <DeckCard deck={c} />
                    </div> : <></>}
                    <div>

                        {a && b && c ? <div id='display-next' onClick={handleIt}>
                            ►
                        </div>
                            : <></>}
                    </div>
                </div>

            </div>


            :
            <div id='card-display-whole'>
                <div id='card-display-header'>
                    {title}
                </div>
                <div className='card-display-cards'>
                    <div>


                    </div>
                    <div>
                        <CardCard card={a} />
                    </div>

                    {b ? <div>
                        <CardCard card={b} />
                    </div> : <></>}
                    {c ?
                        <div>
                            <CardCard card={c} />
                        </div> : <></>}
                    <div>
                        {a && b && c ? <div id='display-next' onClick={handleIt}>
                            ►
                        </div>
                            : <></>}
                    </div>
                </div>

            </div>


    )
}
