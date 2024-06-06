import React from 'react'
import Header from "../common/Header"
import Products from './Products'
import Contacts from './contact'
import Hero from './Hero'
const Home = () => {
  return (
    <div>
      <Header />
      <Hero/>
      <Products/>
      <Contacts/>
    </div>
  )
}

export default Home
