import React from 'react'
import './Menuitems.scss';
import Topbar from '../topbar/Topbar';


const Menuitems = ({open, setopen}) => {
    return (
        <div className={'menuitems ' + (open ? "active" : "")}>
          <ul>
              <li onClick={()=> setopen(false)}>
                  <a href='#intro'>Home</a>
              </li>
              <li onClick={()=> setopen(false)}>
                  <a href='#portfolio'>Portfolio</a>
              </li>
              <li onClick={()=> setopen(false)}>
                  <a href='#works'>Works</a>
              </li>
              <li onClick={()=> setopen(false)}>
                  <a href='#testimonials'>Testimonials</a>
              </li>
              <li onClick={()=> setopen(false)}>
                  <a href='#contact'>Contact</a>
              </li>
          </ul>
        </div>
    )
}

export default Menuitems
