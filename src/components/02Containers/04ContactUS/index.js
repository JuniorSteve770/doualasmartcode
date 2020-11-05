import React, { useState, useEffect } from "react";
import "../04ContactUS/style.css";


const Contact = () => {
 

 

  return (
    <form className="form">
      <h3>please feel the form below to keep communicating with us</h3>

      <label>Name</label>
      <input
        placeholder="Name"
        
      />

      <label>Email</label>
      <input
        placeholder="Email"
       
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        
      ></textarea>

      <button
        type="submit"
        // style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
      <br/>
      <br/>
      <br/>
    </form>
    
  );
};

export default Contact;