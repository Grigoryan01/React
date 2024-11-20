import React from 'react'
import questionImage from '../images/questions.jpg'

function Welcome() {
  return (
    <header className='header'>
        <h1 className='header-title'>Welcome to the Ultimate Quiz Challenge!</h1>
        <h4 className='header-subtitle'>Are you ready to put your knowledge to the test? Dive in, have fun, and see how much you can score!</h4>
        <img src={questionImage} alt="Quiz related image"  />
        <button type='button' className='btn btn-start'>Start Quiz</button>
    </header>
  )
}

export default Welcome