import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

function HotelCard({ room, index }) {
  return (
    <Link to={`/rooms/${room._id}`} onClick={() => scrollTo(0, 0)}
      className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]'>
      
      <img src={room.images[0]} alt="room" className='w-full h-48 object-cover' />
      
      {index % 2 === 0 && (
        <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full shadow'>
          Best Seller
        </p>
      )}

      <div className='p-4'>
        <div className='flex items-center justify-between mb-2'>
          <p className='font-playfair text-lg font-semibold text-gray-800'>{room.hotel.name}</p>
          <div className='flex items-center text-sm gap-1'>
            <img src={assets.starIconFilled} alt="star" className='w-4 h-4' /> 4.5
          </div>
        </div>

        <div className='flex items-center text-sm gap-2 mb-4 text-gray-600'>
          <img src={assets.locationIcon} alt="location" className='w-4 h-4' />
          <span>{room.hotel.address}</span>
        </div>

        <div className='flex items-center justify-between'>
          <p><span className='text-xl text-gray-800'>${room.pricePerNight}</span><span className='text-sm'>/night</span></p>
          <button className='px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-100 transition'>Book Now</button>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard
