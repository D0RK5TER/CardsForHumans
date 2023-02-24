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
import { actionRemoveAll } from '../../store/prints';
// import BadgeFormModal from '../BadgeFormModal';
import '../../0css/print.css'

export default function PrintQueue() {
    const dispatch = useDispatch()
    const history = useHistory()
    const prints = useSelector(state => state.prints)
    const cards = useSelector(state => state.cards)
    const [rend, setRend] = useState(false)

    const cleanup = async () => await dispatch(actionRemoveAll()) || setRend(!rend)
    const printer = () => window.print() || setRend(!rend)
    return (
        <div id='printer-page'>
            <div id='print-title'>

                Savin Ink!
                <div id='print-butt-cont'>


                    <div className='print-butt'
                        onClick={printer}
                    >
                        Print
                    </div>
                    <div className='print-butt'
                        onClick={cleanup}
                    >
                        Clear
                    </div>
                    <div className='print-butt'
                        onClick={() => history.goBack()}
                    >
                        Exit
                    </div>
                </div>
            </div>
            <div id='card-print-box'>

                {Object?.values(prints) ? Object?.values(prints).map(x =>
                    <>
                        <div style={{ margin: '1vw' }}>
                            <CardCard card={cards[x.card]} />
                        </div>
                        
                    </>
                )

                    : <></>}
            </div>




        </div>
    )
}