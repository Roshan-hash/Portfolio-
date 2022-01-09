import React from 'react'
import './Intro.scss';
import Spender from '../../images/me.png';
import { KeyboardArrowDown } from '@material-ui/icons';
import {init} from 'ityped';
import { useEffect, useRef } from 'react';

const Intro = () => {

    useEffect(() => {
        const myElement = document.querySelector('#myelement')
        init(myElement, { showCursor: true, 
            typeSpeed:  150,
            backSpeed:  80,
            startDelay: 1500,
            
            strings: ["Developer_", "Designer_", "Content_Creator_"] })
    }, [])
    return (
        <div className='intro' id='intro'>
            <div className='left'>
                <div className='imgcontainer'>
                    <img src={Spender} alt='userimg'/>
                </div>
            </div>
            <div className='right'>
                <div className='introwrapper'>
                    <h2> Hi There, I'm</h2>
                    <h1>Roshan Sail</h1>
                    <h3>Freelancer <span id='myelement'></span>
                    </h3>
                </div>
                <a href='#portfolio'>
                    <KeyboardArrowDown className='downicon'></KeyboardArrowDown>
                </a>
            </div>
        </div>
    )
}

export default Intro
