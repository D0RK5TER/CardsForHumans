import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { thunkMakeDeck } from '../../store/decks';
// import CardCard from '../CardCard';
import { thunkDeckCard } from '../../store/myprofile';
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
import CardCard from '../CardCard';
// import DeckC
export default function DeckCreate() {
    const dispatch = useDispatch();
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [icon, setIcon] = useState(0)
    const [icon2, setIcon2] = useState(0)
    const [hide, setHide] = useState('none')
    const [visi, setVisi] = useState('relative')
    const [errors, setErrors] = useState([])
    const [did, setDid] = useState(0)
    const [addcnt, setAddcnt] = useState(0)
    const usefav = useSelector(state => state.user.favorites)
    const [opts, setOpts] = useState(usefav)
    const [a, b, c, ...rest] = opts

    const handleIt = async (e) => {
        e.preventDefault()
        const data = await dispatch(thunkMakeDeck({ title, icon: icon2.toString() }))
        !data.errors ? setHide('none') || setDid(data.id) : setErrors(data.errors)

    }
    let selected = icon2
    const addingIt = async (it) => {
        const data = await dispatch(thunkDeckCard(did, it.id))
        if (data?.errors) {
            setErrors(data.errors)
        }
        else {
            const newopts = opts.filter(x => x.id != it.id)
            setOpts(newopts)
            setAddcnt(addcnt + 1)
        }
    }
    const skippingIt = async () => {
        setOpts([b, c, ...rest])
    }
    return (
        <div id='deck-create-whole' className='deck-create'>
            <div id='deck-create-top'>
                <div>
                    <DeckCard deck={{ title, icon }} />
                </div>

                {/* {visi === hide ?
                        <CardDisplay cards={usefav ? usefav : []} title='Pick Some!' />
                    : <></>} */}
                <div id='createdisplay'>
                </div>

                <div id='one-card-right'>
                    <div
                    // onClick={() => setIcon(!icon ? 0 : 1)}
                    >

                    </div>
                    <div id='create-card-right'>
                        <div>Make Your Deck!</div>
                        {visi === hide ?
                            <>You have added {addcnt}-{addcnt==1?'card':'cards'} 5 needed to create a deck</>
                            : <></>}
                        <form id='create-card-right'
                            onSubmit={handleIt}>
                            {/* <div> */}
                            <textarea
                                style={{ display: visi }}
                                id='card-create-textarea'
                                type='textarea'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder='Deckasaurus'
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
                                        onMouseOver={() => setIcon('0')}
                                    >
                                        <img src={logo0} style={{ maxHeight: '70px' }} />
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

                            {/* </div> */}
                            {/* <div> */}
                            {/* </div> */}

                            <button id='edit-modal' type='button'
                                style={{ display: visi }}
                                onClick={() => { setHide('flex'); setVisi('none') }} >
                                Name it!</button>
                            <button id='edit-modal' type='submit'
                                style={{ display: hide }}
                            >Make it!</button>
                        </form>
                    </div>
                </div>

                <div className="error-cont">
                    {errors?.map((error) => (
                        <div classname='error-message'>{error}</div>
                    ))}
                </div>
            </div>
            {visi === hide ?
                <div id='create-deck-card-whole'>
                    <div id='cd-select-header'>
                        Add Some Cards!
                    </div>
                    <div id='cd-select-cards'>
                        <div className='select-one-card'
                            onClick={() => addingIt(a)}
                        >
                            <CardCard card={a} make={1} />
                        </div>
                        <div
                            className='select-one-card'
                            onClick={() => addingIt(b)}>
                            <CardCard card={b} make={1} />
                        </div>
                        <div className='select-one-card'
                            onClick={() => addingIt(c)}>
                            <CardCard card={c} make={1} />
                        </div>
                        {rest?.length ? <div id='display-next' onClick={skippingIt}>
                            ►
                        </div> : <></>}
                    </div>
                    {/* <CardDisplay cards={usefav ? usefav : []} title='Pick Some!' deck_id={did} /> */}
                </div>
                : <></>}
        </div>
    );
}

