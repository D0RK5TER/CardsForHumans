import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { thunkMakeDeck } from '../../store/decks';
// import CardCard from '../CardCard';
import { thunkDeckCard } from '../../store/myprofile';
import DeckCard from '../DeckCard';
import '../../0css/deckcreate.css';
import logo0 from '../../0assets/icons/icon01.png'
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
    const [title, setTitle] = useState('Deckasaures')
    const [icon, setIcon] = useState(0)
    const [icon2, setIcon2] = useState(0)
    const [hide, setHide] = useState('relative')
    const [visi, setVisi] = useState('none')
    const [errors, setErrors] = useState([])
    const [did, setDid] = useState(0)
    const [addcnt, setAddcnt] = useState(0)
    const usefav = useSelector(state => state.user.favorites)
    const [opts, setOpts] = useState(usefav)
    const [ogopt, setOgopt] = useState([])
    const [a, b, c, ...rest] = opts

    const handleIt = async (e) => {
        e.preventDefault()
        const data = await dispatch(thunkMakeDeck({ title, icon: icon2.toString() }))
        !data.errors ? setVisi('none') || setDid(data?.deck?.id) || setOpts(data?.cards) || setOgopt(data?.cards) : window.alert('Decks need a name')

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
            setOgopt(newopts)
            setAddcnt(addcnt + 1)
        }
    }
    const skippingIt = async () => {
       rest?.length? setOpts([b, c, ...rest]): setOpts([b,c, ogopt])
    }
    return (
        <>
            <div id='deck-create-whole' className='deck-create'>
                <div id='deck-create-top'>

                    <div id='createdisplay'>
                        <DeckCard deck={{ title, icon }} make={1} />


                        {/* {visi === hide ?
                        <CardDisplay cards={usefav ? usefav : []} title='Pick Some!' />
                    : <></>} */}
                    </div>


                    <div id='create-deck-right'>
                        {visi === hide || <div id='deck-title'>Make Your Deck!</div>}
                        {visi === 'none' && visi!==hide ? <div id='deck-title-sub'>Select a pic</div> : visi === 'none'?<></>: <div id='deck-title-sub'>Name it...</div>}
                        {visi === hide && addcnt >= 10 ?
                            <div id='make-title' style={{ 'font-size': '2vw',}}>

                                <div>You have added </div>
                                <div>{addcnt} &nbsp; {addcnt == 1 ? 'card' : 'cards'}
                                </div>
                                <button id='edit-modal' type='button'
                                    onClick={() => history.push(`/deck/${did}`)}
                                >Finish!</button>
                            </div>

                            : visi === hide ?
                                <div id='make-title'><div style={{ 'font-size': '2vw', textDecoration: 'underline' }}>You have added </div><div style={{ 'font-size': '4vw' }}>{addcnt ? addcnt : ''} &nbsp; {addcnt == 1 ? 'card' : addcnt == 0 ? 'Nothing' : 'cards'}</div> </div>
                                : <></>}
                        <form id='create-card-right'
                            onSubmit={handleIt}>
                            {/* <div> */}
                            {/* <textarea
                                    style={{ display: visi }}
                                    id='card-create-textarea'
                                    type='textarea'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder='Deckasaurus'
                                    required
                                /> */}
                            {/* <textarea
                                id='card-create-textarea'
                                style={{ display: visi }}
                                type='textarea'
                                value={title}
                                defaultValue={'Deckasaurus'}
                                onChange={(e) => setTitle(e.target.value)}
                                // placeholder='-tern'
                                maxLength='50'
                                required
                            /> */}
                            <input
                            style={{ display: visi }}
                            id='card-create-textarea'
                            type='textarea'
                            value={title}
                            // defaultValue={deck?.title}
                            onChange={(e) => setTitle(e.target.value)}
                            // placeholder='-tern'
                            maxLength='50'

                            required
                        />
                            <div
                                style={{ display: hide }}

                            >
                                <div id='icon-box'>
                                    <div
                                        style={{ border: +icon2 === 0 ? '2px solid white ' : 'none' }}
                                        onMouseLeave={() => setIcon(icon2)}
                                        onClick={() => setIcon2('0')}
                                        onMouseOver={() => setIcon('0')}
                                    >
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

                            {/* </div> */}
                            {/* <div> */}
                            {/* </div> */}

                            <button id='edit-modal' type='button'
                                style={{ display: hide }}
                                onClick={() => { setHide('none'); setVisi('flex') }}>
                                Pick One!</button>
                            <button id='edit-modal' type='submit'
                                style={{ display: visi }}
                            >Name It!</button>
                        </form>

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
                        {a? 
                            <div className='select-one-card'
                                onClick={() => addingIt(a)}
                            >
                                <CardCard card={a} make={3} />
                            </div>
                            : <></>}
                            {b? 
                            <div
                                className='select-one-card'
                                onClick={() => addingIt(b)}>
                                <CardCard card={b} make={3} />
                            </div>
                            : <></>}
                            {c? 
                            
                            <div className='select-one-card'
                                onClick={() => addingIt(c)}>
                                <CardCard card={c} make={3} />
                            </div>
                        : <></>}
                            {/* {opts?.length ? <div id='display-next' onClick={skippingIt}>
                                ►
                            </div> : <></>} */}
                        </div>
                        {/* <CardDisplay cards={usefav ? usefav : []} title='Pick Some!' deck_id={did} /> */}
                    </div>
                    : <></>}
            </div>
        </>
    );
}

