import './App.scss';
import React from 'react'
import Topbar from './components/topbar/Topbar';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import { useState } from 'react';
import Menuitems from './components/menu/Menuitems';



const App = () => {
  const [openmenu, setOpenmenu] = useState(false)
  return (
    <div className='app'>
      <Topbar open={openmenu} setopen={setOpenmenu} />
      <Menuitems open={openmenu} setopen={setOpenmenu} />
      <div className='sections'>
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  )
}

export default App


