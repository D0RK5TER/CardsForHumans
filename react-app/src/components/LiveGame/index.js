import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { thunkOneGame } from "../../store/games";
// import { fetchMessages } from "../store/message";
// import trash from "../css/images/trash.svg"
// import { fetchOneChannel } from "../store/channel";

// import { Modal } from "./context/Modal.js";
// import SearchResultsModal from "./SearchResults/SearchResultsModal";

import { v4 as uuidv4 } from "uuid";

let socket;

export default function Game() {
  const dispatch = useDispatch();
  const { gameId } = useParams();

  const theMessages = useSelector((state) => state.games);
  const games = useSelector((state) => state.games);
  const user = useSelector((state) => state.user);
  const currGame = games[gameId]
//   const serverInfo = useSelector((state) => state.server.server);

  const [game, setGame] = useState(games[gameId]);
//   const [messageTime, setMessageTime] = useState("");
//   const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const [showOptions, setShowOptions] = useState("");
  const [showEditInput, setShowEditInput] = useState(false);
  const [editInput, setEditInput] = useState('');
  const [editInputIndex, setEditInputIndex] = useState('');
  const [edited, setEdited] = useState(false);
  const [deleted, setDeleted] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);

  const messageEnd = useRef(null);
  const searchRef = useRef({});
//   const [searchResults, setSearchResults] = useState([]);
//   const [showSearchResults, setShowSearchResults] = useState(false);

  // SCROLL helper func
//   const messageScroll = () => {
//     messageEnd.current?.scrollIntoView({ behavior: "smooth" });
//   };

  // needs update


  // Initializing SocketIO / Chat on load
  useEffect(() => {
    // initial channel message load
    (async () => {
      const response = await fetch(`/api/game/${gameId}`);
      const data = await response.json();

      setGame(data.game);
      setMessages([...data.messages]);
    })();

    // dispatch(fetchOneChannel(channelId))
    console.log(gameId, '123123')

    // initializing socket.io
    socket = io();
    socket.emit("join", { user: user, room: gameId });
    socket.on("chat", (chat) => {
      const currDate = Date(chat.timestamp);
      const dateStamp = currDate.toString().split("-")[0];
      const res = {
        gameId: +chat.room,
        createdAt: dateStamp,
        message: chat.message,
        liveId: chat.live_id,
        isEdited: chat.is_edited,
        user: { ...chat.user },
      };
      setMessages((messages) => [...messages, res]);
    });

    socket.on("update", (updated_chat) => {
      setEdited(!edited)
      console.log(updated_chat, "UPDATED RETURNEDDD FROM EMIT")
      const res = {
        gameId: +updated_chat.room,
        createdAt: updated_chat.created_at,
        message: updated_chat.message,
        liveId: updated_chat.live_id,
        isEdited: updated_chat.is_edited,
        user: { ...updated_chat.user },
      };
      const index = messages.findIndex(
        (message) => message.liveId === updated_chat.live_id
      );
      let newMessages = messages;
      newMessages[index] = res;
      console.log(newMessages, "NEW MESSAGESSSSSSSSSSSSSSSSS")
      setMessages(newMessages => [...newMessages]);
    });

    socket.on("delete", (delete_chat) => {
      setDeleted(!deleted)
      const index = messages.findIndex(
        (message) => message.live_id === delete_chat.live_id
      );
      let newMessages = messages;
      newMessages.splice(index, 1);
      setMessages((newMessages) => [...newMessages]);
    });
    return () => {
      socket.disconnect();
    };
  }, [gameId, currGame, edited, deleted]);

  // dispatching for new channel
  useEffect(() => {
    if (!gameId) {
      return null;
    }
    dispatch(thunkOneGame(+gameId));
  }, [dispatch, gameId]);

  // SCROLL with useRef
  useEffect(() => {
    messageEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // INPUT length check
  const stringCheck = (str) =>
    str
      .split(" ")
      .filter((c) => c !== "")
      .join("").length >= 1;
//   const inputReducer = (str) => str.replace(/\s+/g, " ").trim();

  // CHAT HELPER FUNCS
  const updateChatInput = (e) => {
    setChatInput(e.target.value);
  };

  const updateEditInput = (e) => {
    setEditInput(e.target.value);
  };

  const sendChat = (e) => {
    e.preventDefault();

    if (stringCheck(chatInput)) {
      socket.emit("chat", {
        user: user,
        message: chatInput,
        room: gameId,
        timestamp: new Date(),
        
      });
    }

    setChatInput("");
  };

  const sendUpdatedChat = (e, message) => {
    e.preventDefault();
    setShowEditInput(false)

    if (stringCheck(editInput)) {
      socket.emit("update", {
        id: message.id,
        user: user,
        room: gameId,
        message: editInput,
        is_edited: true,
        created_at: message.createdAt,
        // live_id: message.liveId,
      });
    }

    setChatInput("");
  };

  const deleteChat = (e, message) => {
    e.preventDefault();

    socket.emit("delete", {
      user: user,
      room: gameId,
      live_id: message.liveId,
    });

    setChatInput("");
  };
  const messageOptionsComponent = (i, message) => {
    if (message.user.id === user.id) {
      return (
        <div className="message-options-container">
          <div className="message-edit-button" onClick={() => {
            setShowEditInput(true)
            setEditInput(message.message)
            setEditInputIndex(i)
            setShowOptions("")
            }}>`<img src={`https://res.cloudinary.com/dixbzsdnm/image/upload/v1675642900/this.cord%20images/pencil-solid_tsonqb.svg`} />`</div>
          <div className="message-delete-button" onClick={(e) => deleteChat(e, message)}><img src={`https://res.cloudinary.com/dixbzsdnm/image/upload/v1675642406/this.cord%20images/trash-can-grey_bpmqlk.svg`} alt="delete" /></div>
        </div>
      );
    } else return null;
  };

  return (
    <div className="channel-container">
      <div className="channel-header-container">
        <span className="channel-hash">
          #<span className="channel-name">{game?.name}</span>
        </span>
        {/* <div className="search-form-container">
          <form onSubmit={sendSearch} className="search-message-form-form">
            <input
              className="search-message-form-input-container"
              value={searchInput}
              onChange={updateSearchInput}
              placeholder={`Search`}
            />
          </form>
          {showSearchResults && (
            <Modal onClose={() => setShowSearchResults(false)}>
              <SearchResultsModal
                setShowSearchResults={setShowSearchResults}
                showSearchResults={showSearchResults}
                messages={searchResults}
              />
            </Modal>
          )}
        </div> */}
      </div>
      <div className="messages-users-container">
        {console.log(theMessages)}
        <div className="message-input-container">
          hey
          <div className="channel-messages-container">
            {messages?.map((message, i) => (
              <div
                key={i}
                onMouseOver={() => {if(!showEditInput) setShowOptions(i)}}
                onMouseLeave={() => setShowOptions("")}
                // ref={searchRef  [i]}
                ref={(el) => (searchRef.current[message.id] = el)}
                className="single-message-container"
                id={+i}
              >
                {showOptions === i && messageOptionsComponent(i, message)}
                {message &&
                messages[i - 1]?.user?.id !== messages[i]?.user?.id ? (
                  <>
                    <div className="single-message-user-info">
                      <span className="single-message-username">
                        {" "}
                        {message?.user?.username}{" "}
                      </span>
                      <span className="single-message-user-timestamp">
                        {" "}
                        {message?.createdAt}{" "}
                      </span>
                    </div>
                    {(showEditInput && (editInputIndex === i))  ? null : (<div className="single-message-message-info">
                      {message?.message} {message.isEdited && (<span>(edited)</span>)}
                    </div>) }

                  </>
                ) : (
                  <>
                    <div className="single-message-user-info">
                      <span className="single-message-timestamp">
                        {message?.createdAt}
                      </span>
                    </div>

                      {(showEditInput && (editInputIndex === i))  ? null : (<div className="single-message-message-info">
                      {message?.message} &nbsp; &nbsp; &nbsp; {message.isEdited && (<span className="edited">(edited)</span>)}
                    </div>) }
                      <div ref={messageEnd} />

                  </>
                )}
                {showEditInput && (editInputIndex === i) &&
                (
                <form onSubmit={(e) => sendUpdatedChat(e, message)} className="message-form-form">
              <input
                className="message-form-input-container"
                value={editInput}
                onChange={updateEditInput}
                placeholder={`Message #${message.message}`}
              />
              <div className="cancel-edit" onClick={() => setShowEditInput(false)}>cancel</div>
            </form>
                )

                }
              </div>
            ))}
          </div>
          <div className="message-form-container">
            <form onSubmit={sendChat} className="message-form-form">
              <input
                className="message-form-input-container"
                value={chatInput}
                onChange={updateChatInput}
                placeholder={`Message #${game?.name}`}
              />
            </form>
          </div>
        </div>
        {/* <div className="members-list"> */}
          {/* <strong>Members - {serverInfo?.users?.length}</strong>
          {serverInfo?.users?.map((user, i) => (
            <NavLink to="/coming-soon">
              <p id="one-member" key={i}>
                <img
                  id="member-profile"
                  src="https://www.svgrepo.com/show/331368/discord-v2.svg"
                  alt=""
                ></img>
                {user?.username}
              </p>
            </NavLink>
          ))}
        </div> */}
      </div>
    </div>
  );
}
