import React from 'react'

const DishComponent = () => {
  return (
    <div className='w-full h-full flex flex-col gap-5'>
      <div className='hidden lg:flex w-full h-1/5'></div>

      <div className='w-full flex flex-col gap-3 p-3' style={{border:"2px solid purple"}}>
        <h1 className='text-3xl font-extrabold lg:text-4xl appTitle'>Food Menu</h1>
        <p className='text-wrap indent-10 text-justify italic font-semibold text-md'>
          Browse the delicious cuisine for the week.
        </p>
      </div>

      <div className='w-full h-full' style={{border:"2px solid purple"}}>

      </div>

      <div className='w-full h-full' style={{border:"2px solid purple"}}>
        </div>      
    </div>
  )
}

export default DishComponent