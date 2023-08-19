import React from 'react'
import MainCrosel from '../../HomeCrosel/MainCrosel'
import HomeSectionCasrosel from '../../HomeSectionCarosel/HomeSectionCasrosel';
const HomePage = () => {
  return (
    <div>
      <MainCrosel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCasrosel/>
      </div>
    </div>
  )
}

export default HomePage;
