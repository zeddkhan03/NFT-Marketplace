import React from 'react'
import weth from '../assets/weth.png'
import './CollectionCard.css'

const CollectionCard = ({id, name, traits, image}) => {
  return (
    <div className='card-container'>
    <div className='collectionCard'>
      <img src={image}/>
      <div className='details'>Alpha Z
      <div className='name'>
         <div className='id'> .#{id}</div>
      </div>
      
      <div className='priceContainer'>
        <img src={weth} className='wethImage'/>
        <div className='price'>{traits[0]?.value}</div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CollectionCard
