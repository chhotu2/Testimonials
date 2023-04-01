import React from 'react'
import Testimonials from './Testimonials';
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa';

const Cards = (props) => {
    let review=props.review;
    return (
    <div className='flex flex-col relative'>
       <div className='absolute top-[-7rem] z-[10] mx-auto'>
         <img className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' src={review.image}/>
         <div className='w-[140px] h-[140px] bg-violet-500 rounded-full  absolute top-[-6px] z-[-10] left-[10px]'></div>
       </div>

        <div className='text-center mt-7'>
            <p className='tracking-wider font-bold text-2xl capitalize'>{review.name}</p>
        </div>
        <div className='text-center mt-7'>
            <p className='text-voilet-300 uppercase text-sm'>{review.job}</p>
        </div>

        <div className='text-volilet-400 mx-auto mt-5'>
            <FaQuoteLeft/>
        </div>
        <div className='text-center mt-4 text-slate-500'>
             <p>{review.text}</p>
        </div>
        <div className='text-voilet-400 mx-auto mt-5'>
            <FaQuoteRight/>
        </div>

   
    </div>
  )
}

export default Cards
