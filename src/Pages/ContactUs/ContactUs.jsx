import React, { Fragment } from "react";
import "./ContactUs.css";
import formBg from "../../Assets/formBg.svg";
// import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
const ContactUs = () => {
  return (
    <div>
    <div className="container1">
      {/* <Header/> */}

      <div className="formBg">
        <img src={formBg} alt="bg" />
      </div>
      <form className="fmContact" action="" target="_self" id="form">
        <h3>Contact us</h3>
        <p>
          For further questions, including partnership opportunities, please
          email hello@creative- tim.com or contact using our contact form.
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
            <i id="errorName"></i>
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
            <i id="errorEmail"></i>
          </div>
        </div>
        <div>
          <label for="">How can we help you?</label>
          <br />
          <textarea
            name="textarea"
            id="textarea"
            cols="50"
            rows="5"
            placeholder="Describe your problem in at least 250 characters"
          ></textarea>
          <br />
          <i id="errorTextArea"></i>
        </div>
        <input type="submit" value="SEND MESSAGE" id="submit" />
        <i id="errorSubmit"></i>
      </form>

    </div>
      <Footer/>
      </div>
  );
};

export default ContactUs;
