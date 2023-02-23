
import React from 'react';
import { Link } from 'react-router-dom'
import { useModal } from '../../context/Modal';
import gitcon from '../../0assets/gitcon.png';
import linkcon from '../../0assets/linkcon.png';


export default function About() {
    const { closeModal } = useModal()
    return (

        <div id='myinfocont'>
            <div id="myinfoheader">

                <div id='loginexitbutt' onClick={() => closeModal()}>
                    ⓧ
                </div>
                <div id='myinfosubheader'>
                    <div id='myheadtop'>Welcome!</div>
                    <div id='myheadbot'>No Us,&nbsp; Just Me</div>
                </div >
            </div>

            <div id='myinfopage'>
                <div className="gitcon" onClick={() => window.location = 'https://github.com/D0RK5TER/earthRnR'}>
                    <img src={gitcon}
                        className="gitcon"
                        style={{ float: 'left' }}
                        alt='my buttons'
                    />
                </div>
                <Link
                    id='dexter'
                    to='#'
                    onClick={(e) => {
                        window.location.href = "mailto:pdassaf@gmail.com"
                        e.preventDefault();
                    }}>
                    Email Dexter
                </Link>
                <div className="linkcon" onClick={() => window.location = 'https://www.linkedin.com/in/p-dexter-assaf-63a7a3252/'}>
                    <img src={linkcon}
                        alt='my buttons'
                    />
                </div>
            </div>
        </div>

    );
}