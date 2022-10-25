import React from 'react';
import { Button } from './button';
import './HeroSection.css';
import '../App.css';


function HeroSection() {
  return (
    
    <div className='hero-container'>
       <h1>DIAMANT IS LOADING....</h1>
        <p>You're going to love whats coming</p>
        <div className="hero-btns">
            <Button 
            className='btns' 
            ButtonStyle='btn--outline'
            buttonSize='btn--large'
            >
                GET STARTED
            </Button>
            <Button
            className='btns' 
            ButtonStyle='btn--primary'
            buttonSize='btn--large'
            >
                WATCH TRAILER <i className='far fa-play-circle'/>
            </Button>

        </div>
    </div>
  );
}

export default HeroSection