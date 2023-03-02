import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { io } from "socket.io-client";
import { thunkOneGame } from "../../store/games";
import '../../0css/game.css'
// import { fetchMessages } from "../store/message";
// import trash from "../css/images/trash.svg"
// import { fetchOneChannel } from "../store/channel";

// import { Modal } from "./context/Modal.js";
// import SearchResultsModal from "./SearchResults/SearchResultsModal";

import { v4 as uuidv4 } from "uuid";

let socket;

export default function GameChat() {
  const dispatch = useDispatch();
  const { gameId } = useParams();

  const theMessages = useSelector((state) => state.games);
  const games = useSelector((state) => state.games);
  const user = useSelector((state) => state.user);
  const currGame = games[gameId]
  const [game, setGame] = useState(games[gameId]);
  //   const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  let th = document.getElementById('messages_cont')

  //   const [showDeleteModal, setShowDeleteModal] = useState(false);
  // Initializing SocketIO / Chat on load
  useEffect(() => {
    // initial channel message load
    (async () => {
      const response = await fetch(`/api/game/${gameId}`);
      const data = await response.json();
      setGame(data.game);
      setMessages(data.messages);
      th?.scroll(0, 1000000000)

    })();

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
        user: { ...chat.user },
      };
      setMessages((messages) => [...messages, res]);
      th?.scroll(0, 1000000000)
    });

    return () => {
      socket.disconnect();
    };
  }, [gameId, currGame, chatInput]);

  // dispatching for new channel
  useEffect(async () => {
    if (!gameId) {
      return null;
    }
    const data = await dispatch(thunkOneGame(+gameId));
    if (!data.errors) {
      setGame(data.game);
      setMessages(data.messages);
    }

  }, [dispatch, gameId]);

  // SCROLL with useRef
  // useEffect(() => {
  //   messageEnd.current?.scrollIntoView({ behavior: "smooth" });
  // }, [messages]);

  // CHAT HELPER FUNCS
  const sendChat = (e) => {
    e.preventDefault();
    if (chatInput) {
      socket.emit("chat", {
        user: user,
        message: chatInput,
        room: gameId,
        timestamp: new Date(),

      });
    }
    setChatInput("");
    th?.scroll(0, 1000000000)

  };

  // let th = document.getElementById('messages_cont')
  // console.log(th)

  return (
    <div className="game-chat-cont">
      <div className='chat-scroll-cont' id='messages_cont'>
        {messages?.map((message, i) => (
          <>
            <div className="chat-text-row">
              {message?.user?.username}&nbsp;:&nbsp;&nbsp; {message?.message}
            </div>
          </>
        ))}
      </div>

      <div className="chat-send-cont chat-input">
        <form onSubmit={sendChat} className="chat-send-form">
          <input
            className='chat-input'
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder='Say Something!'
          />
        </form>
      </div>
    </div>
  );
}
