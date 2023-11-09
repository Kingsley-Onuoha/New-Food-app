import React from 'react'
import Itemlist from './ItemList'
import { useState } from 'react'

const RestaurantCategory = ({data, showItems, setShowIndex}) => {


  const handleClick = () =>{
      setShowIndex()
  }
   
  return (
    <div className='restaurant-category'>
        <div className='accordion-header' onClick={handleClick}>
              <h3>{data?.title} ({data?.itemCards?.length})</h3>
              {showItems == false? (<i class="fa fa-angle-down" aria-hidden="true"></i>):
              (<i class="fa fa-angle-up" aria-hidden="true"></i>)}
        </div> 
        {showItems && <Itemlist items={data?.itemCards} />} 
    </div>
  )
}

export default RestaurantCategory