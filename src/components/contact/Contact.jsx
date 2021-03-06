import { useState } from "react";
import "./contact.scss"

export default function Contact() 
{
  const [message,setMessage] = useState(false)   
  
  const handleSubmit = (e) => {
      e.preventDefault();
      setMessage(true)
    }


    return (
      <div className="contact" id="contact">
        <div className="left">
            <img src="https://www.kindpng.com/picc/m/46-468797_handshake-contract-support-agreement-communication-shaking-hands-forming.png" alt=""></img>
        </div>
        <div className="right">
            <h2>Contact.</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Email"></input>
              <textarea placeholder="Message"></textarea>
              <button type="submit">Send</button>
              {message && <span>Thanks,I will be respond as soon as possible</span>}
            </form>
        </div>
      </div>
    );
}
  