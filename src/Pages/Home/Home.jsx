import React from 'react'
import Hero from './Hero'
import Card from './Card'
import Teachers from './Teachers'
import Contact from './Contact'

const Home = () => {
  return (
    <main className='font-exo'>
      <Hero />
      <Card />
      <Teachers />
      <Contact />
    </main>
  )
}

export default Home