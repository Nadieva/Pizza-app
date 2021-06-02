import React from 'react';
import '../App.css';
import { LOGO_PICTURE_URL } from '../Constants';

export const Navbar = () => {
  return (
    <div id="navbar">
      <ul >
        <a href="/home">Home</a>
        <a href="/pizzas">Pizzas</a>
        <a href="/drinks">Drinks</a>
        <a href="/desserts" >Desserts</a>
      </ul>
      <div id="logoDiv"><img id="logoImage" src={LOGO_PICTURE_URL} /></div>
    </div>

  )
};