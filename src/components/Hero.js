import React from 'react'
import HeroImg from '../../src/images/hero--img--grid.png'

export default function Hero() {
  return (
    <div className='hero'>
        <div className='image-div'>
      <img src={HeroImg} alt="Grid images" className='hero-img'/>
      </div>
      <div className='hero-text-div'>
      <h1 className='hero-heading'>Online Experiences</h1>
      <p className='hero-text'>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </div>
    </div>
  )
}
