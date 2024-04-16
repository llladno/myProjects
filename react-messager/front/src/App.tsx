import React, {useEffect, useState} from 'react';
import './App.css';
import { useCookies } from 'react-cookie';
import axios from "axios";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import MainPage from "./components/mainpage/MainPage";
import Registration from "./components/registration/Registration";
import Login from "./components/registration/Login";

function App() {

function handleGetCookie() {
  fetch('http://localhost:3005/', {
    method: 'GET',
    credentials: 'include', // Включаем передачу куков
  })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
}

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Routes>
      </BrowserRouter>
      {/*<input id='inputCookie' onChange={(event)=> setMessage(event.target.value)}/>*/}
      {/*<button onClick={handleSetCookie}>Set</button>*/}
      {/*<button onClick={handleGetCookie}>Get</button>*/}
      {/*{time.toLocaleString()}*/}
    </div>
  );
}

export default App;
