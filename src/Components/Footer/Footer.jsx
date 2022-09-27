import React from 'react'
import "./Footer.css"
import {Link} from 'react-router-dom';
import facebook from  '../../Assets/facebook.svg';
import instagram from  '../../Assets/instagram.svg';
import twitter from  '../../Assets/twitter.svg';
import GooglePlay from  '../../Assets/googlePlay.svg';
import applePlayStore from  '../../Assets/applePlayStore.svg';
// import facebook from  '../../Assets/facebook.svg';
// import facebook from  '../../Assets/facebook.svg';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams
// } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
        {/* <footer> */}
        <div className="footerLinks">
          <div className="links">
            <ul>
       {/* <li> <Link to ='./ContactUs'><a href=''> ContactUs</a></Link></li> */}

              <li> <Link to='../'><a className="footerLogo" href="">Jadoo.</a></Link>
                </li>
              <li><p> Book your trip in minute, get full
                Control for much longer.</p>
              </li>
            </ul>
          </div>
            <div className="links">
        <ul>
          <li> <a href="#">Company</a>  </li>
          <li>  <a href="#">About</a> </li>
          <li>  <a href="#">Careers</a></li>
          <li>  <a href="#">Mobile</a></li>
      
    </ul>
      </div>
      <div className="links">
        <ul>
       <li> <Link to ='./ContactUs'><a href=''> ContactUs</a></Link></li>
         {/* <li> <link to ="./pages/ContactUs"> Contact /></li> */}
          {/* <li>  <a href="./ContactUs/contactUs">Contact</a> </li> */}
           <li> <a href="#">Help/FAQ</a></li>
           <li> <a href="#">Press</a></li>
           <li> <a href="#">Affilates</a></li>
       
        </ul>
      </div>
      <div className="links">
        <ul>
            <li><a href="#">More</a> </li>
            <li><a href="#">Airlinefees</a></li>
           <li> <a href="#">Airline</a></li>
           <li> <a href="#">Low fare tips</a></li>
       
    </ul>
      </div>
      <div className="links">
          <div className="socials">
              <a href="/https://facebook.com"><img src={facebook} alt="facebook" /></a>
               <a href="https://instagram.com"><img className="instagram" src={instagram} alt="instagram" /></a>
              <a href="https://twitter.com"><img src={twitter} alt="twitter" /></a>
            </div>
        <div><p>Discover our app</p></div>
        <div className="playStore">
          <a href="https://googleplay.com"><img src={GooglePlay} alt="GooglePlay" /></a>
          <a href="https://apps.apple.com"><img src={applePlayStore} alt="applePlayStore" /></a>
        </div>
    </div>
</div>

<span className='footerSpan'>All rights reserved@jadoo.co</span>
    </div>
  )
}

export default Footer