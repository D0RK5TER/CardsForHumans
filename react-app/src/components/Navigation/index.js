import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import OpenModalButton from "../ModalButton";
import About from "../AAbout";

import '../../0css/navbar.css'

export default function Navigation({ isLoaded }) {
	const history = useHistory()
	const sessionUser = useSelector(state => state.user);
	const que = useSelector(state => state.prints)
	return (
		<div id='navbar'>
			<div onClick={() => history.push('/')} id='home-button'>
				<div>Cards
					<br />For<br /> Humans
				</div>
			</div>
			<>
				{Object?.values(que)?.length?
				<div onClick={()=>history.push('/printer')}>
				Print Page
				</div>
				:<></>}
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

