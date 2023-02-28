import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useModal } from "../../context/Modal";
import { thunkDeckCard, thunkMyInfo } from '../../store/myprofile';
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

export default function DeckCardModal({ idx, setRend, rend, decks }) {
    const dispatch = useDispatch();
    const history = useHistory()
    const [errors, setErrors] = useState([])
    const { closeModal } = useModal()
    const logos = [logo0, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9]
    // let decks = useSelector(state => state.myprofile?.decks)
    const handleIt = async (did) => {
        const data = await dispatch(thunkDeckCard(did, idx))
        if (data?.errors) {
            setErrors(data.errors)
        }
        else {
            await thunkMyInfo()
            await setRend(!rend)
            // console.log(decks)
            // decks = decks.filter(x=>!x?.id!==did)
            closeModal()
        }
    }
    // const cancelIt = async (e) => {
    //     e.preventDefault()
    //     const data = await dispatch(thunkDeleteCard(card?.id))
    //     data.ok ? history.push(`/profile`) || closeModal() : setErrors(data.errors)
    // }
    // console.log(decks)
    // useEffect(()=>

    decks = decks?.filter(x => !x?.cards.includes(+idx))
    // )
    // console.log(decks)
    return (
        <div>
            <div className="modal-header">

                <div className="modal-title" style={{ textDecoration: 'none' }}>
                    Which  deck?


                </div>

                <div className="modal-exit" onClick={closeModal}>
                    ⓧ
                </div>
            </div>

            <div id='icon-box' >
                {decks?.length ?
                    decks.map((x) =>
                        <div id='mini-deck' onClick={() => handleIt(x.id)} style={{ fontFamily: 'Helvitica', fontWeight: 'bolder', cursor: 'pointer' }}>
                            <div style={{ fontFamily: 'Helvitica', fontWeight: 'bolder', cursor: 'pointer' }}>
                                {x.title}
                            </div>
                            <img src={logos[x.icon]} />
                            {/* {console.log(deck)} */}
                        </div>
                    )
                    : <div>Looks like you need more decks! or maybe less cards? </div>}

            </div>
        </div>
    );
}

