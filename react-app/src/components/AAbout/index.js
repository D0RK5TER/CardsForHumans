
import React from 'react';
import { Link } from 'react-router-dom'
import { useModal } from '../../context/Modal';
import gitcon from '../../0assets/gitcon.png';
import linkcon from '../../0assets/linkcon.png';


export default function About() {
    const { closeModal } = useModal()
    return (

        <div className="modal-content about">
            <div className="modal-header">

                <div className="modal-title" style={{ textDecoration: 'none' }}>
                    Welcome!

                </div>

                <div className="modal-exit" onClick={closeModal}>
                    ⓧ
                </div>
            </div>

            <div>
                Some text would look nice here
            </div>
            <div id='myinfopage'>
                <div className="gitcon" onClick={()=>window.open('https://github.com/D0RK5TER/cardsforhumans', '_blank')}
                    style={{ cursor: 'pointer' }}
                >
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
                <div className="linkcon" style={{ cursor: 'pointer' }} onClick={() => window.open('https://www.linkedin.com/in/p-dexter-assaf-63a7a3252/', '_blank')}>
                    <img src={linkcon}
                        alt='my buttons'
                    />
                </div>
            </div>
        </div>

    );
}