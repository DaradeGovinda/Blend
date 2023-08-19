import React from 'react'
import MainCrosel from '../../HomeCrosel/MainCrosel'
import HomeSectionCasrosel from '../../HomeSectionCarosel/HomeSectionCasrosel';
import teaProducts from '../../../../Data/Products/TeaProducts';
const HomePage = () => {
  return (
    <div>
      <MainCrosel/>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCasrosel data={teaProducts} sectionName={"Best Seller"}/>
      </div>
    </div>
  )
}

export default HomePage;
