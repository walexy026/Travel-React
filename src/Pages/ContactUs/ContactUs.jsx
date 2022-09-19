import React from 'react'
import "./ContactUs.css"
const ContactUs = () => {
  return (
    <div>
         <div classNameName="formBg"><img src="./assets/formBg.svg" alt="" /></div>
    <form action="" target="_self" id="form">
      <h3>Contact us</h3>
      <p>
        For further questions, including partnership opportunities, please email
        hello@creative- tim.com or contact using our contact form.
      </p>
      <div className="flName">
        <div>
          <label for="FullName"> Full Name</label> <br />
          <input
            type="text"
            name="Full Name"
            id="FullName"
            placeholder="Full Name"
          />
          <br />
          <span id="errorName"></span>
        </div>
        <div>
          <label for="Email">Email</label> <br />
          <input
            type="email"
            name="Email"
            id="Email"
            placeholder="hello@creative-tim.com"
          />
          <br />
          <span id="errorEmail"></span>
        </div>
      </div>
      <div>
        <label for="">How can we help you?</label><br />
        <textarea
          name="textarea"
          id="textarea"
          cols="50"
          rows="5"
          placeholder="Describe your problem in at least 250 characters"
        >
        </textarea>
        <br />
        <span id="errorTextArea"></span>
      </div>
      <input type="submit" value="SEND MESSAGE" id="submit" />
      <span id="errorSubmit"></span>
    </form>
    </div>
  )
}

export default ContactUs