import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

export default function Navigation({ isLoaded }){
	const history = useHistory()
	const sessionUser = useSelector(state => state.user);

	return (
		<div id='navbar'>
			<div>
				<div onClick={()=>history.push('/')}>Home</div>
			</div>
			{isLoaded && (
				<div>
					<ProfileButton user={sessionUser} />
				</div>
			)}
		</div>
	);
}

