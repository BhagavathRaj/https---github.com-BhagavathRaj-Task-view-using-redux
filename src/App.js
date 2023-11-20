/* eslint-disable react/jsx-no-undef */
/** @format */
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import Appbar from './components/Appbar';
import {Route,Routes} from "react-router-dom"
import Home from './components/Home';
import Post from './components/Post';
import Carts from './components/Carts';
function App() {
  return (
    <>
    <Appbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/favorite" element={<Carts />}></Route>
      </Routes>
    </>
  );
}

export default App;
