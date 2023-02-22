import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function OneCard({ id }) {
    // const sessionUser = useSelector(state => state.user);
    return (
        <div>
            <div>
                {deck?.title}
            </div>
            <div>
                {deck?.icon}
            </div>
            <div>
                Logo Here
            </div>
        </div>
    );
}

