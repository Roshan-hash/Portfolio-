import React from 'react'
import './Contact.scss';
import { useState } from "react";
import Contactimg from '../../images/ContactImage.gif';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Send } from '@material-ui/icons';


export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={Contactimg} alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <TextField id="standard-basic" label="Name" variant="standard" />
          <TextField id="standard-basic" label="Email" variant="standard" />
          <TextField 
          id="standard-basic" 
          label="Message"
          multiline
          rows={4} 
          variant="standard" />
          
          <Button variant="contained" color="primary" endIcon={<Send />}>
             Send
          </Button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}