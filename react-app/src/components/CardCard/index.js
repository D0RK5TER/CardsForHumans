import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CardCard({ card }) {
    // const sessionUser = useSelector(state => state.user);
    return (
        <div>
            <div>
                {card?.text}
            </div>
            <div>
                Logo Here
            </div>
        </div>
    );
}

