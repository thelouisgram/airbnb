import React from 'react'

export default function Card(props) {
  let badgeText 
  if(props.openSpots === 0){
    badgeText = "SOLD OUT"
  }else if (props.location === "Online") {
    badgeText = 'ONLINE'
  }


  return (
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img src={props.img} alt="Card" className='card-img' />
      <div className='card--stats'>
        <i class="fa-solid fa-star"></i>
        <span>{props.rating}</span>
        <span className='gray'>({props.reviewCount}) • </span>
        <span className='gray'>{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className='bold'>From ${props.price} </span> / person</p>
    </div>
  )
}
