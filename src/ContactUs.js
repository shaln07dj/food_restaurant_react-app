import React from 'react';
import { contact_us_image } from './images';

const ContactUs=()=> {
    return (
        <div>
            
            <div className="contact-us" id="contact-us">
  <h6>Contact Us</h6><br/>
<div className="jumbotron jumbotron-fluid" id ="contact_us_form" style={{backgroundImage:`url(${contact_us_image})`, backgroundRepeat: "no-repeat",
  backgroundSize: "cover",height:"500px"}}>
<br/><br/><br/>
<form className="contact-form1">
  <div className="form-group">
    <label className="label-contact" for="name">Name:</label>
    <input  type="text" className="form-control" id="name" placeholder="Name"/>
  </div>
  <div className="form-group">
    <label className="label-contact" for="eamil">Email address:</label>
    <input type="email" className="form-control" id="email" placeholder="email"/>
  </div>
  <div className="form-group">
    <label className="label-contact"  for="password">Password:</label>
    <input type="password" className="form-control" id="password" placeholder="password"/>
  </div>
  <div className="form-group">
    <label className="label-contact" for="message">Message:</label>
    <input type="text" className="form-control" id="message" placeholder="Message"/>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="FieldsetCheck" />
      <label className="label-contact"for="FieldsetCheck">
        Remember Me
      </label>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</div>



        </div>
    )
}

export default ContactUs
