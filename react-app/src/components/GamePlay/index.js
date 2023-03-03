import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import { io } from 'socket.io-client';
import { v4 as uuidv4 } from "uuid";
import '../../0css/game.css'
let socket;

export default function LiveGame() {
  const user = useSelector(state => state.user);
  const stategame = useSelector(state=>state.games)
  const [game, setGame] = useState(stategame)
  const [players, setPlayers] = useState({})
  const { gameId } = useParams()
  // use state for controlled form input
  // const [chatInput, setChatInput] = useState("");

  useEffect(() => {
    // console.log(stategame[gameId], '#@@#@@#')
    (async () => {
      const response = await fetch(`/api/game/${gameId}`);
      const data = await response.json();
      // console.log(data, '$3$')
      setGame(data.game);
      setPlayers(data?.game?.players)
      socket.emit("join", {id: gameId})

    })();
    socket = io();
    // listen for chat events
    // socket.join('join', {})
    // socket.emit("join", {id: user?.id})
    // socket.join(gameId)
    socket.on('join',(gamez)=>{
      console.log(gamez, 'VWVWVWVWVW!!!!!!!')
      const {players, ...rest} = gamez
      setGame(rest)
      setPlayers(players)
    })
  }, [])

  return (
    <div id='gameboard' onClick={null}>
      {players?.length?players.map(x=><>{x.username}</>):<>adsasdasdads</>}
    </div>
  )
};
