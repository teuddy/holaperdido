import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

let socket;

const Chat = () => {

  useEffect(() => {
    socket = io('http://localhost:8080');
    socket.on('connect', () => {
      console.log('connected');
    });
  }, []);

  return(
    <h1>hello worlsd</h1>
  )
 
};
  
export default Chat;
  
  