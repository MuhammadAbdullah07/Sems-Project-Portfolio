import './intro.scss'
import { useEffect,useState } from 'react'


export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className='left'>
        <div className='wrapper'>
          <h1>Hi There , I'm</h1>
          <h2>Abdullah</h2>
          <h3>Web Developer</h3>
          <button><a href='#portfolio'>Check Portfolio</a></button>
        </div>
      </div>
      <div className='right'>
        <div className='imgContainer'>
          <img src="https://www.transparentpng.com/thumb/man/rTkJ7v-man-png-image.png" alt=""></img>
        </div>
      </div>
    </div>
  )
}