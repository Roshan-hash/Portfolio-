import React from 'react'
import './Topbar.scss';
import { Mail, MyLocation, PersonSharp } from '@material-ui/icons';


const Topbar = ({open, setopen}) => {
    return (
        <div className={'topbar ' + (open ? "active" : "")}>   
        <div className='topbarWrapper'>
            <div className='left'>
                <a href='#intro' className='logo'>tech.</a>
                <div className='itemContainer'>
                    <PersonSharp className='icon'/>
                    <span>+91-7499239853</span>
                    <div className='itemContainer'>
                        <Mail className='icon'></Mail>
                        <span>roshansail40@gmail.com</span>
                    </div>
                    <div className='itemContainer'>
                        <MyLocation className='icon'></MyLocation>
                        <span>po box 1461 red oak tx 75154</span>
                    </div>
                </div>
            </div>
            <div className='right'>
              <div className='menusetting' onClick={()=> setopen(!open)}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
              </div>
            </div>
        </div>
        </div>
    )
}

export default Topbar
