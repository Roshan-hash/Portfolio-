import React from 'react'
import './Whatsapp.scss';

const Whatsapp = () => {
    return (
        <div className='wcontainer'> 
          <button title="wbuttonicon" className='' style="fill: rgb(255, 255, 255);">
            <a href='#' >
                <img src='../../images/whatsapp.png' alt=''></img>
            </a>
            <span className='notification'></span>
          </button>
       </div>
    )
}

export default Whatsapp
