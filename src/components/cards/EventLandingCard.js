import React from 'react'

const EventLandingCard = ({data}) => {
  return (
    <div className='flex mt-8 p-4 bg-white rounded-[20px]'>
      <img className='w-[300px] h-[250px] rounded-md' src={data.image} alt='event-img'/>
      <div className='flex flex-col items-center flex-1'>
         <h1 className='text-3xl font-inter font-semibold uppercase'>{data.title}</h1>
         <h2 className='mt-4 w-64'>{data.desc}</h2>
         <h3>{`mode : ${data.mode}`}</h3>   
         <h4>{`fee : ${data.fee}`}</h4>
         <button>Register Now</button>
      </div>
      <div className='bg-blue-600'>
        <h1>{data.date}</h1>
      </div>
    </div>
  )
}

export default EventLandingCard
