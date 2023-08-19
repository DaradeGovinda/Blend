import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col item-center bg-white rounded-lg shadow-lg overflow-hidden w-[20rem] mx-3 border '>
      <div className='h-[13rem] w-[15rem]'>
        <img className='object-cover object-top w-full h-full' src="https://vikramtea.com/wp-content/uploads/2020/02/Klassic3-500g.jpg" alt="" />

      </div>
      
      <div className='p-4'>
          <h3 className='text-lg font-medium text-gray-900'>Classic Kadak</h3>
          <p className='mt-2 text-sm text-gray-500'>Monsoon Edition | Ginger, Cloves, Tulsi, Cardamom</p>
      </div>
    </div>
  )
}

export default HomeSectionCard
