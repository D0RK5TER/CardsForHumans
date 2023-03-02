import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import { io } from 'socket.io-client';
import { v4 as uuidv4 } from "uuid";
import '../../0css/game.css'
let socket;

export default function LiveGame() {
  const user = useSelector(state => state.user);
  const [messages, setMessages] = useState([])
  const { gameId } = useParams()
  // use state for controlled form input
  const [chatInput, setChatInput] = useState("");

  useEffect(() => {

    socket = io();
    // listen for chat events
    socket.on("chat", (chat) => {
      // when we recieve a chat, add it into our messages array in state
      setMessages(messages => [...messages, chat])
    })

    

  }, [])

  const updateChatInput = (e) => {
    setChatInput(e.target.value)
  };

  const sendChat = (e) => {
    e.preventDefault()
    // emit a message

    socket.emit("chat", { user: user.username, message: chatInput, room: gameId, live_id: uuidv4(), });
    // clear the input field after the message is sent
    setChatInput("")
    console.log('????')
  }
  console.log(messages, '!!!!')
  return (
    <div id='gameboard' onClick={null}>
      
    </div>
  )
};
