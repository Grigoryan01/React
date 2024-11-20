import React, { useState } from 'react'
import questionImage from '../images/questions.jpg'
import Questions from './Questions';

function Welcome() {
    const [quizStarted, setQuizStarted]=useState(false);
    const handleClick= ()=>{
        setQuizStarted(true);
    }
    return (
        <>
            {!quizStarted ? (
                <header className='header'>
                    <h1 className='header-title'>Welcome to the Ultimate Quiz Challenge!</h1>
                    <h4 className='header-subtitle'>Are you ready to put your knowledge to the test? Dive in, have fun, and see how much you can score!</h4>
                    <img src={questionImage} alt="Quiz related image" />
                    <button type='button' className='btn btn-start' onClick={handleClick}>Start Quiz</button>
                </header>
            ) : (
                <Questions />
            )}
        </>
    );
}

export default Welcome