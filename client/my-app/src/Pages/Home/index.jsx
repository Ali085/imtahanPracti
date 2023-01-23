import React from 'react'
import HomeCards from '../../Components/HomeCards'
import HomeHeader from '../../Components/HomeHeader'
import Navbar from '../../Layout/Navbar'

function Home() {
  return (
    <>
      <Navbar/>
      <HomeHeader/>
      <HomeCards/>
    </>
  
  )
}

export default Home