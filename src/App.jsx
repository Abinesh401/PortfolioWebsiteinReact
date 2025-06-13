import React from 'react'
import Hero from './Components/Hero'
import Services from './Components/Services'
import WhereToBuy from './Components/WhereToBuy/WhereToBuy'
import AppBanner from './Components/AppBanner/AppBanner'
import Foooter from './Components/Foooter/Foooter'

const App = () => {
  return (
    <>

    <div className="overflow-x-hidden">
    <Hero/>
    <Services/>
    <WhereToBuy/>
    <AppBanner/>
    <Foooter/>
    </div>
   
    
    </>
  )
}

export default App

