import React from 'react'

const RestaurantCategory = ({data}) => {
    console.log(data)
  return (
    <div className='restaurant-category'>
        <div className='accordion-header'>
            <span>{data?.title}</span>
            <span><i class="fa fa-angle-down" aria-hidden="true"></i></span>
        </div>
    </div>
  )
}

export default RestaurantCategory