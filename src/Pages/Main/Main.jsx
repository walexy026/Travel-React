import "./Main.css";
import heroBg from  '../../Assets/heroBg.svg';
import playButton from  '../../Assets/PlayButton.svg';
import travellerGirl from  '../../Assets/travellerGirlPlane.svg';
import tinyStars from  '../../Assets/tinyStars.svg';
import sateliteDish from  '../../Assets/sateliteDish.svg';
import bestFlight from  '../../Assets/bestFlight.svg';
import LocalEvents from  '../../Assets/LocalEvents.svg';
import customizationSettings from  '../../Assets/customizationSettings.svg';
import romeDistination from  '../../Assets/romeDistination.png';
import sendDestination from  '../../Assets/sendDestination.svg';
import londonDistination from  '../../Assets/londonDistination.png';
import europeDistination1 from  '../../Assets/europeDistination1.png';
import chooseDestination from  '../../Assets/chooseDestination.svg';
import makePayment from  '../../Assets/makePayment.svg';
import arrivalTime from  '../../Assets/arrivalTime.svg';
import tripToGreece from  '../../Assets/tripToGreece.svg';
import leaf from  '../../Assets/leaf.svg';
import mapIcon from  '../../Assets/mapIcon.svg';
import send from  '../../Assets/send.svg';
import peopleGoing from  '../../Assets/peopleGoing.svg';
import likes from  '../../Assets/likes.svg';
import tripToRome from  '../../Assets/tripToRome.svg';
import ImageTestimonial from  '../../Assets/ImageTestimonial.svg';
import arrowUp from  '../../Assets/arrowUp.svg';
import arrowDown from  '../../Assets/arrowDown.svg';
import axon from  '../../Assets/axon.svg';
import jetstar from  '../../Assets/jetstar.svg';
import expediaa from  '../../Assets/expediaa.svg';
import qantas from  '../../Assets/qantas.svg';
import alitalia from  '../../Assets/alitalia.svg';
import sendBig from  '../../Assets/sendBig.svg';
import eclipseRight from  '../../Assets/eclipseRight.svg';
import eclipseLeft from  '../../Assets/eclipseLeft.svg';
import littleStarDown from  '../../Assets/littleStarDown.svg';
import mail from  '../../Assets/mail.svg';

const Main = () => {
  return (
    <div>
        <main>
      {/* HEROSECTION  */}
      <section className="heroSection">
        <div className="heroSubOne">
          <div className="heroBackgrond">
            <img src={heroBg} alt="HeroBackGround" />
          </div>
          <h3>Best Destinations around the world</h3>
          <h1>Travel, <span>enjoy</span> and live a new and full life</h1>
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <aside>
            <button className="btn1">Find out more</button>
            <div className="iframe" ><a href="https://youtu.be/cTT7E6M-1Js"><img src={playButton} alt="PlayButton"/></a>
            </div>
            Play Demo
          </aside>
        </div>
        <div className="heroImage">
          <img src={travellerGirl} alt="TravellerGirl" />
        </div>
      </section>
      {/* SERVICES SECTION  */}
      <section className="services">
        <div className="servicesText">
          <img src={tinyStars} alt="tinyStars" />
          <h6>CATEGORY</h6>
          <h3>We Offer Best Services</h3>
        </div>
        <div className="servicesLists">
          <div className="servicesRendered">
            <img src={sateliteDish} alt="sateliteDish" />
            <h6>Calculated Weather</h6>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
            <div className="box"></div>
          </div>
          <div className="servicesRendered">
            <img src={bestFlight} alt="bestFlight" />
            <h6>Best Flights</h6>
            <p>Engrossed listening. Park gate sell they west hard for the.</p>
            <div className="box"></div>
          </div>
          <div className="servicesRendered">
            <img src={LocalEvents} alt="LocalEvents" />
            <h6>Local Events</h6>
            <p>
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.
            </p>
            <div className="box"></div>
          </div>
          <div className="servicesRendered">
            <img
              src={customizationSettings}
              alt="customizationSettings"
            />
            <h6>Customization</h6>
            <p>
              We deliver outsourced aviation services for military customers
            </p>
            <div className="box"></div>
          </div>
        </div>
      </section>
       {/* DESTINATION SECTION  */}
      <section id="destination" className="destination">
        <div className="destinationText">
          <h6>Top Selling</h6>
          <h3>Top Destinations</h3>
           {/* <div className="sketches"> 
          <img src="./Assets/roughSketch.svg" alt="roughSketch">
          </div>  */}
        </div>
        <div className="destinationCities">
          <div className="cities">
            <div className="cityImg">
              <img src={romeDistination} alt="destinationRome" />
            </div>
            <div className="cityTrip">
              <span className="city">
                <p>Rome, Italy</p>
                <p>$5,42k</p>
              </span>
              <span className="trip">
                <img src={sendDestination} alt="sendDestination" />
                <p>10 Days Trip</p>
              </span>
            </div>
          </div>
          <div className="cities">
            <div className="cityImg">
            <img src={londonDistination} alt="destinationUK" />
          </div>
          <div className="cityTrip">

            <div className="city">
              <p>London, UK</p>
              <p>$4.2k</p>
            </div>
            <div className="trip">
              <img src={sendDestination} alt="sendDestination" />
              <p>12 Days Trip</p>
            </div>
          </div>
          </div>
          <div className="cities">
            <div className="cityImg">
            <img src={europeDistination1} alt="destinationEurope" />
          </div>
          <div className="cityTrip">
            <span className="city">
              <p>Full Europe</p>
              <p>$5,42k</p>
            </span>
            <span className="trip">
              <img src={sendDestination} alt="sendDestination" />
              <p>28 Days Trip</p>
            </span>
          </div>
          </div>
        </div>
      </section>
      <section id="stepToBook" className="stepsToBook">
        <div className="stepText">
          <h5>Easy and Fast</h5>
          <h2>Book your next trip in 3 easy steps</h2>
          <span className="steps">
            <img src={chooseDestination} alt="chooseDestination" />
            <span>
              <h6>Choose Destination</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </span>
          </span>
          <span className="steps">
            <img src={makePayment} alt="makePayment" />
            <span>
              <h6>Make Payment</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </span>
          </span>
          <span className="steps">
            <img src={arrivalTime} alt="arrivalTime" />
            <span>
              <h6>Reach Airport on Selected Date</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </span>
          </span>
        </div>
        <div className="blurWrapper">
          <div className="tripPackage">
            <img src={tripToGreece.svg} alt="tripToGreece" />
            <h6>Trip To Greece</h6>
            <p>14-29 June| by Robbin joseph</p>
            <span>
              <img src={leaf} alt="leaf" />
              <img src={mapIcon} alt="mapIcon" />
              <img src={send} alt="send" />
            </span>
            <span className="peopleLikes">
              <span className="peopleGoing">
                <img src={peopleGoing} alt="peopleGoing" />
                <p>24 people going</p>
              </span>
              <img src={likes} alt="likes" />
            </span>
            <div className="tripToRome">
              <div className="outGoing">
                <img src={tripToRome} alt="tripToRome" />
                <div className="going">
                  <h6>Ongoing</h6>
                  <p>Trip to rome</p>
                </div>
              </div>
              <h6>40% completed</h6>
              <div className="container">
                <div className="skills progress"></div>
              </div>
            </div>
            <div className="ecilpse"></div>
            </div>
        </div>
       </section>
        {/* TESTIMONIALS  */}
     <section className="testimonial">
        <div className="testimonies">
          <h5>Testimonials</h5>
          <h2>What people say
            about Us.</h2>
             {/* ONCLICK JAVASCRIPT FUNCTION FOR THE CAROUSEL  */}
            <div className="carouselDot" onclick="currentSlide(1)"> </div>
            <div className= "carouselDot" onclick="currentSlide(2)"></div>
            <div className="carouselDot" onclick="currentSlide(3)"></div>
        </div>
        <div>
          <div className="carouselTestimony carouselTestimony__visible">
            <img src={ImageTestimonial} alt="ImageTestimonial"/>
            <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
            <h6>Mike taylor</h6> 
            <h6>Lahore, Pakistan</h6>
          </div>
          <div className="carouselTestimony carouselTestimony__hidden">
            <img src={ImageTestimonial} alt="ImageTestimonial"/>
            <p>“Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet deserunt tempore ducimus unde aperiam ullam maiores inventore nesciunt nam consequuntur mollitia nostrum doloribus ad soluta, porro necessitatibus perferendis architecto dicta.”</p>
            <h6>Mike taylor</h6>
            <h6>Lahore, Pakistan</h6>
          </div>
          <div className="carouselTestimony carouselTestimony__hidden">
            <img src={ImageTestimonial} alt="ImageTestimonial"/>
            <p>“Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ab natus laudantium consequatur ipsam ex..”</p>
            <h6>Mike taylor</h6>
            <h6>Lahore, Pakistan</h6>
          </div>
          <div className="arrow">
            <img className="arrowUp" onclick="plusSlides(-1)" src={arrowUp} alt="arrowUp"/>
            <img className="
            arrowDown" onclick="plusSlides(1)" src={arrowDown} alt="arrowDown"/>
          </div>
        </div>
      </section>
       {/* PARTNERS  */}
      <section id="flight" className="partners">
        <div className="partnerLogo">
          <a href="https://axon.com"><img src={axon} alt="axon" /></a>
        </div>
        <div className="partnerLogo">
          <a href="https://jetstar.com"><img src={jetstar} alt="jetstar" /></a>
        </div>
        <div className="partnerLogo">
          <a href="https://expedia.com"><img src={expediaa} alt="expedia" /></a>
        </div>
        <div className="partnerLogo">
          <a href="https://qantas.com"><img src={qantas} alt="qantas" /></a>
        </div>
        <div className="partnerLogo">
          <a href="https://alitalia.com"><img src={alitalia} alt="alitalia" /></a>
        </div>
      </section>
      <section id="subscribe" className="subscribe">
         <a href="https://telegram.com"><img src={sendBig} alt="telegram" /></a>
        <h3>Subscribe to get information, latest news and other
          interesting offers about Jadoo</h3>
          <div className="ecilpse1"><img src={eclipseRight} alt="eclipseRight"/></div>
          <div className="ecilpse2"><img src={eclipseLeft} alt="eclipseLeft"/></div>
          <form action="">
            <img src={mail} alt="mail"/>
          <label for="Email">  </label>
            <input type="email" name="Email"  id="Email" placeholder="Your email" />
            <input type="submit" value="Subscribe" id="submit" name="Subscribe" />
            <span id="errorEmail"></span>
        </form>
        <div className="littlestars">
          <img src={littleStarDown} alt="littleStarDown"/>
        </div>
      </section>
    </main> 
      
    </div>
  )
}

export default Main