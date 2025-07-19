import React from 'react'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AnimatedCursor from 'react-animated-cursor'

const App = () => {
  return (
    <div>
      <AnimatedCursor
      innerSize={12}
      outerSize={12}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      innerStyle={{
        backgroundColor: '#fff'
      }}
      outerScale={5}
      outerStyle={{
        boxShadow: '0px 0px 20px 7px #ff99cc'
      }}
    />
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App