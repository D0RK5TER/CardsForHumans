import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import OpenModalButton from "../ModalButton";
import { thunkSplashCards } from '../../store/cards';
import About from "../AAbout";

import '../../0css/navbar.css'

export default function Navigation({ isLoaded }) {
	const dispatch = useDispatch()
	const history = useHistory()
	const sessionUser = useSelector(state => state.user);
	const que = useSelector(state => state.prints)
	// console.log(window.location.href)
	return (
		<div id='navbar'>
			{!window.location.href.includes('/game/')?<div onClick={() => { dispatch(thunkSplashCards()); history.push('/') }} id='home-button'>
				<div>Cards
					<br />For<br /> Humans
				</div>
			</div>:<div></div>}
			<>
				{Object?.values(que)?.length ?
					<>
						<div id='go-go-printer' onClick={() => history.push('/printer')}>
							Print Page ~ {Object?.values(que)?.length} {Object?.values(que)?.length == 1 ? 'card' : 'cards'}
						</div>
					</>
					: <></>}
			</>
			{isLoaded && (
				<div id='nav-right'>
					<OpenModalButton
						buttonText='About ▿'
						location='nav-bar-modal'
						modalComponent={<About />}
					/>
					<ProfileButton user={sessionUser} />
				</div>
			)}
		</div>
	);
}

