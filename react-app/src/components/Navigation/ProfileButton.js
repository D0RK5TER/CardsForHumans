import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { logout } from "../../store/session";
import OpenModalButton from "../ModalButton";
import LoginFormModal from "../AuthLoginFormModal";
import SignupFormModal from "../AuthSignupFormModal";
export default function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory()
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = async (e) => {
    e.preventDefault();
    await dispatch(logout());
    history.push('/')
    closeMenu()
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
      <div onClick={openMenu}>
        Account ▿
      </div>
      <div className={ulClassName} ref={ulRef}>
        {user?.id ? (
          <>
            <div id='top-half'>
              <div>{user.username}</div>
              <div>{user.email}</div>
            </div>
            <div id='bot-half'>
              <div>
                <button onClick={() => history.push('/profile') || closeMenu()} >Your Stuff</button>
              </div>
              <div>
                <button onClick={() => history.push('/deck/create') || closeMenu()} >Deck Building</button>
              </div>
              <div>
                <button onClick={() => history.push('/create') || closeMenu()} >Make A Card</button>
              </div>
              <div>
                <button onClick={handleLogout}>Log Out</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              location='profile-drop-button'
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              location='profile-drop-button'
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </div>
    </>
  );
}
