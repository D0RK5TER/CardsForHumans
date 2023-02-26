import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import { thunkMyBrewery } from '../../store/brewery';
// import BreweryCard from '../BreweryCard';
// import BreweryFormModal from '../BreweryFormModal';
// import OpenModalButton from '../ModalButton';
import { thunkSplashCards } from '../../store/cards'
import CardCard from '../CardCard';
// import DeckCard from '../DeckCard';
// import BadgeFormModal from '../BadgeFormModal';
import '../../0css/splash.css'

export default function SplashPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    let splash = useSelector(state => state.cards)
    let user = useSelector(state=>state.user?.id)
    // useEffect(() => async () => {
    //     await dispatch(thunkMyBrewery(userId))
    // }, [dispatch])
    let questions
    let answers
    splash !== undefined ? questions = Object?.values(splash)?.filter(x => x.is_question == 1) : questions = null
    splash !== undefined ? answers = Object?.values(splash)?.filter(x => x.is_question == 0) : questions = null
    useEffect(() => {
        dispatch(thunkSplashCards())
    }, [])
    const [a, b, c, d, e, f, ...rest1] = answers
    const [z, ...rest2] = questions
    console.log(questions, answers, splash)
    return (
        <div id='splash-page-whole'>
            <div id='splash-page-top'>
                <div id='top-left'>
                    <CardCard card={a} make={user?0:2}/>
                </div>
                <div id='top-right'>
                    <CardCard card={b} make={user?0:2}/>
                </div>
            </div>
            <div id='splash-page-mid'>
                <div id='mid-left'>
                    <CardCard card={c} make={user?0:2}/>
                </div>
                <div id='mid-mid'>
                    <CardCard card={z} make={user?0:2}/>
                </div>
                <div id='mid-right'>
                    <CardCard card={d} make={user?0:2}/>
                </div>
            </div>
            <div id='splash-page-bot'>
                <div id='bot-left'>
                    <CardCard card={e} make={user?0:2}/>
                </div>
                <div id='bot-right'>
                    <CardCard card={f} make={user?0:2}/>
                </div>
            </div>
        </div>

    )
}
