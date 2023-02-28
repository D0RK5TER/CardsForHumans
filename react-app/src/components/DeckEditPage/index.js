import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { thunkEditDeck, thunkDeleteDeck, thunkGetDeck } from '../../store/decks';

// import CardCard from '../CardCard';
import DeckCard from '../DeckCard';
import '../../0css/deckcreate.css';
import logo0 from '../../0assets/icons/icon0.png'
import logo1 from '../../0assets/icons/icon1.png'
import logo2 from '../../0assets/icons/icon2.png'
import logo3 from '../../0assets/icons/icon3.png'
import logo4 from '../../0assets/icons/icon4.png'
import logo5 from '../../0assets/icons/icon5.png'
import logo6 from '../../0assets/icons/icon6.png'
import logo7 from '../../0assets/icons/icon7.png'
import logo8 from '../../0assets/icons/icon8.png'
import logo9 from '../../0assets/icons/icon9.png'

export default function DeckEdit() {
    const dispatch = useDispatch();
    const history = useHistory()
    const { idx } = useParams()
    const deck = useSelector(state => state.decks)
    const [title, setTitle] = useState(deck[idx]?.title)
    const [icon, setIcon] = useState(deck[idx]?.icon)
    const [icon2, setIcon2] = useState(deck[idx]?.icon)
    const [hide, setHide] = useState('flex')
    const [visi, setVisi] = useState('none')
    const [errors, setErrors] = useState([])
    const [tog, setTog] = useState(true)
    useEffect(() => {
        if (!deck[idx]) history.goBack()
    }, [])

    const handleIt = async (e) => {
        e.preventDefault()
        if (title.length > 0) {
            const data = await dispatch(thunkEditDeck({ title, icon }, idx))
            !data ? history.push(`/deck/${idx}`) : window.alert('Decks need a name') || history.goBack()
        }
        else {
            setTitle('Gotta be something...')
            // setHide('none') || setVisi('flex')
        }
    }

    const firstHandle = () => setHide('none') || setVisi('flex')


    let boo = 1
    // const cancelIt = async (e) => {
    //     e.preventDefault()
    //     const data = await dispatch(thunkDeleteDeck(deck?.id))
    //     data.ok ? history.push(`/profile`) || closeModal() : setErrors(data.errors)
    // }
    return (
        <div id='one-card-whole'>
            <div>
                <DeckCard deck={{ title, icon }} />
            </div>
            {/* <div id='one-card-right'> */}
            <div
            // onClick={() => setIcon(!icon ? 0 : 1)}
            >
                {/* </div> */}
                <div id='create-deck-right'>
                    <div id='deck-title'>Get Changin!</div>
                    <form
                        id='create-card-right'
                        onSubmit={handleIt}>
                        {/* <div> */}
                        <input
                            style={{ display: visi }}
                            id='card-create-textarea'
                            type='textarea'
                            value={title}
                            defaultValue={deck?.title}
                            onChange={(e) => setTitle(e.target.value)}
                            // placeholder='-tern'
                            required
                        />
                        <div
                            style={{ display: hide }}

                        >
                            <div id='icon-box'>
                                <div
                                    style={{ border: +icon2 === 0 ? '2px solid white' : 'none' }}
                                    onMouseLeave={() => setIcon(icon2)}
                                    onClick={() => setIcon2('0')}
                                    onMouseOver={() => setIcon('0')}>
                                    <img src={logo0} />
                                </div>
                                <div
                                    style={{ border: +icon2 === 1 ? '2px solid white' : 'none' }}
                                    onMouseLeave={() => setIcon(icon2)}
                                    onClick={() => setIcon2('1')}
                                    onMouseOver={() => setIcon('1')}>
                                    <img src={logo1} />
                                </div>
                                <div
                                    style={{ border: +icon2 === 2 ? '2px solid white' : 'none' }}

                                    onMouseLeave={() => setIcon(icon2)}
                                    onClick={() => setIcon2('2')}
                                    onMouseOver={() => setIcon('2')}>
                                    <img src={logo2} />
                                </div>
                                <div
                                    style={{ border: +icon2 === 3 ? '2px solid white' : 'none' }}

                                    onMouseLeave={() => setIcon(icon2)}
                                    onClick={() => setIcon2('3')}
                                    onMouseOver={() => setIcon('3')}>
                                    <img src={logo3} />
                                </div>
                                <div
                                    style={{ border: +icon2 === 4 ? '2px solid white' : 'none' }}

                                    onMouseLeave={() => setIcon(icon2)}
                                    onClick={() => setIcon2('4')}
                                    onMouseOver={() => setIcon('4')}>
                                    <img src={logo4} />
                                </div>
                                <div
                                    style={{ border: +icon2 === 5 ? '2px solid white' : 'none' }}

                                    onMouseLeave={() => setIcon(icon2)}
                                    onClick={() => setIcon2('5')}
                                    onMouseOver={() => setIcon('5')}>
                                    <img src={logo5} />
                                </div>
                                <div
                                    style={{ border: +icon2 === 6 ? '2px solid white' : 'none' }}

                                    onMouseLeave={() => setIcon(icon2)}
                                    onClick={() => setIcon2('6')}
                                    onMouseOver={() => setIcon('6')}>
                                    <img src={logo6} />
                                </div>
                                <div
                                    style={{ border: +icon2 === 7 ? '2px solid white' : 'none' }}

                                    onMouseLeave={() => setIcon(icon2)}
                                    onClick={() => setIcon2('7')}
                                    onMouseOver={() => setIcon('7')}>
                                    <img src={logo7} />
                                </div>
                                <div
                                    style={{ border: +icon2 === 8 ? '2px solid white' : 'none' }}

                                    onMouseLeave={() => setIcon(icon2)}
                                    onClick={() => setIcon2('8')}
                                    onMouseOver={() => setIcon('8')}>
                                    <img src={logo8} />
                                </div>
                                <div
                                    style={{ border: +icon2 === 9 ? '2px solid white' : 'none' }}

                                    onMouseLeave={() => setIcon(icon2)}
                                    onClick={() => setIcon2('9')}
                                    onMouseOver={() => setIcon('9')}>
                                    <img src={logo9} />
                                </div>
                            </div>

                        </div>
                        <button id='edit-modal' type='button'
                            style={{ display: hide }}
                            // onHover={()=>boo=1}
                            onMouseEnter={() => setTog(!tog)}
                            onMouseLeave={() => setTog(!tog)} 
                            onClick={firstHandle} >

                            {tog ? 'Change=Good' : 'Change!=Good'}</button>
                        <button id='edit-modal' type='submit'
                            style={{ display: visi }}
                        >Change it!</button>
                        <div className="error-cont">
                            {errors?.map((error) => (
                                <div style={{ color: 'white' }} classname='error-message'>{error}</div>
                            ))}
                        </div>
                    </form>
                </div>
                <div className="error-cont">
                    {errors?.map((error) => (
                        <div classname='error-message'>{error}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

