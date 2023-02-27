import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { logout } from "../../store/session";
import OpenModalButton from "../ModalButton";
import LoginFormModal from "../AuthLoginFormModal";
import SignupFormModal from "../AuthSignupFormModal";
import { thunkMyInfo } from "../../store/myprofile";
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

              <div id='nav-butt' onClick={async () => await dispatch(thunkMyInfo()) || history.push('/profile') || closeMenu()} >
                Your Stuff
              </div>


              <div id='nav-butt' onClick={() => history.push('/deck/create') || closeMenu()} >
                Make Stuffs
              </div>


              <div id='nav-butt' onClick={() => history.push('/create') || closeMenu()}>
                Make Stuff
              </div>


              <div id='nav-butt' onClick={handleLogout}>
                Bye Bye
              </div>


            </div>
          </>
        ) : (
          <>
            <OpenModalButton
              buttonText="Log In"
              onItemClick={closeMenu}
              location='nav-butt'
              modalComponent={<LoginFormModal />}
            />

            <OpenModalButton
              buttonText="Sign Up"
              onItemClick={closeMenu}
              location='nav-butt'
              modalComponent={<SignupFormModal />}
            />
          </>
        )}
      </div>
    </>
  );
}
