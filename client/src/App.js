import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';
import io from 'socket.io-client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Signup from './pages/Signup';

const socket = io('http://localhost:8000/');
function App() {
  const [data, setData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  //Client,server connection using cors
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/');//data from server
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [])

  //Socket.io message event
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, [])

  const sendMessage = () => {
    if (input) {
      socket.emit('message', input);
      setInput('');
    }
  }

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup'element={<Signup/>}></Route>
        </Routes>
    </div>

  );
}

export default App;
