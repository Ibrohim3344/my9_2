import React from 'react'
import Hero from './Hero'
import Card from './Card'
import Teachers from './Teachers'
import Contact from './Contact'
import Result from './Result'
import Coments from './Comments'
import News from './News'

const Home = () => {
  return (
    <main className='font-exo'>
      <Hero />
      <Card />
      <Teachers />
      <Contact />
      <News />
      <Result />
      <Coments />
    </main>
  )
}

export default Home