import React from 'react'

export default function Card() {
  return (
    <div className='card'>
      <img src='../../src/images/katie.png' alt="katie" className='card-img' />
      <div className='card--stats'>
        <i class="fa-solid fa-star"></i>
        <span>5.0</span>
        <span className='gray'>(6) • </span>
        <span className='gray'>USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p><span className='bold'>From $136 </span> / person</p>
    </div>
  )
}
