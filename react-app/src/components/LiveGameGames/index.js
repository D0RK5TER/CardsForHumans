import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { thunkGames } from "../../store/games";
import Game from "../LiveGame";
// import { fetchOneChannel } from "../store/channel";
// import LogoutButton from "./auth/LogoutButton";
// import { Modal } from "./context/Modal.js";
// import ServerFormModal from "./ServerForm/ServerFormModal";

export default function GameList() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const gamesArr = useSelector((state) => state.games);
  // const serverObj2 = useSelector((state) => state.server.server);
  const [clicked, setClick] = useState(false);
  const [hoveredId, setHoveredId] = useState(-1);
  const [gameId, setGameId] = useState("");
  const [channelId, setChannelId] = useState("");
  const [showModal, setShowModal] = useState(false);
  // const serverArr = Object.values(serverObj)

  useEffect(() => {
    dispatch(thunkGames())
    // .then(() => {
    //   if (!clicked) {
    //     setServerId(Object.values(serverObj)[0]?.id);
    //   }
    // });

  }, [dispatch, gameId]);


  const displayGameName = (gameId) => {
    setHoveredId(gameId);
  };

  const hideGameName = () => {
    setHoveredId(-1);
  };

  const abbreviate = (serverName) => {
    let initials = [serverName[0]];

    for (let i = 0; i < serverName.length; i++) {
      serverName[i - 1] === " " && serverName[i] !== " " && initials.push(serverName[i]);
    }

    return initials.length <= 5 ? initials.join("") : initials.slice(0, 5);
  };

  const games = gamesArr?.map((game, i) => {
    return (
      <div className="listItem" key={i}>
        
        <div
          className="serverIcon"
          onMouseOut={hideGameName}
          onMouseOver={() => displayGameName(game?.id)}>
          <div className="link">{game && abbreviate(game?.name)}</div>
        </div>
      </div>
    );
  });
  /////////////////
  return (
    <div className="main">
      <div className="bg">
        
        {/* {showModal && (
          <Modal onClose={() => setShowModal(false)}>
                    <div className="list">{games}</div>
          </Modal>
        )} */}
      </div>
      <div className="general-bar">
        {gameId && <Game gameId={gameId} />}
        <div className='logout-user-container'>
              <div className="general-bar-user">
                <img
                  id="member-profile"
                  src="https://www.svgrepo.com/show/331368/discord-v2.svg"
                  alt=""
                ></img>
                {user?.username}
              </div>
              {/* <div className="logout-button">
                <LogoutButton />
              </div> */}
            </div>
      </div>
    </div>
  );
}

// export default ServersList;
