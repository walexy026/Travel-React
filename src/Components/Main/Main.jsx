import React from 'react'
import "./Main.css"

const Main = () => {
  return (
    <div>
        <main>
      {/* HEROSECTION  */}
      <section class="heroSection">
        <div class="heroSubOne">
          <div class="heroBackgrond">
            <img src="./Assets/HeroBg.svg" alt="HeroBackGround" />
          </div>
          <h3>Best Destinations around the world</h3>
          <h1>Travel, <span>enjoy</span> and live a new and full life</h1>
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <aside>
            <button class="btn1">Find out more</button>
            <div class="iframe" ><a href="https://youtu.be/cTT7E6M-1Js"><img src="./Assets/PlayButton.svg" alt="PlayButton"></a>
            </div>
            Play Demo
          </aside>
        </div>
        <div class="heroImage">
          <img src="./Assets/TravellerGirlPlane.svg" alt="TravellerGirl" />
        </div>
      </section>
      {/* SERVICES SECTION  */}
      <section class="services">
        <div class="servicesText">
          <img src="./Assets/tinyStars.svg" alt="tinyStars" />
          <h6>CATEGORY</h6>
          <h3>We Offer Best Services</h3>
        </div>
        <div class="servicesLists">
          <div class="servicesRendered">
            <img src="./Assets/sateliteDish.svg" alt="sateliteDish" />
            <h6>Calculated Weather</h6>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
            <div class="box"></div>
          </div>
          <div class="servicesRendered">
            <img src="./Assets/bestFlight.svg" alt="bestFlight" />
            <h6>Best Flights</h6>
            <p>Engrossed listening. Park gate sell they west hard for the.</p>
            <div class="box"></div>
          </div>
          <div class="servicesRendered">
            <img src="./Assets/LocalEvents.svg" alt="LocalEvents" />
            <h6>Local Events</h6>
            <p>
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.
            </p>
            <div class="box"></div>
          </div>
          <div class="servicesRendered">
            <img
              src="./Assets/customizationSettings.svg"
              alt="customizationSettings"
            />
            <h6>Customization</h6>
            <p>
              We deliver outsourced aviation services for military customers
            </p>
            <div class="box"></div>
          </div>
        </div>
      </section>
       {/* DESTINATION SECTION  */}
      <section id="destination" class="destination">
        <div class="destinationText">
          <h6>Top Selling</h6>
          <h3>Top Destinations</h3>
          <!-- <div class="sketches"> 
          <img src="./Assets/roughSketch.svg" alt="roughSketch">
          </div> -->
        </div>
        <div class="destinationCities">
          <div class="cities">
            <div class="cityImg">
              <img src="./Assets/romeDistination.png" alt="destinationRome" />
            </div>
            <div class="cityTrip">
              <span class="city">
                <p>Rome, Italy</p>
                <p>$5,42k</p>
              </span>
              <span class="trip">
                <img src="./Assets/sendDestination.svg" alt="sendDestination" />
                <p>10 Days Trip</p>
              </span>
            </div>
          </div>
          <div class="cities">
            <div class="cityImg">
            <img src="./Assets/londonDistination.png" alt="destinationUK" />
          </div>
          <div class="cityTrip">

            <div class="city">
              <p>London, UK</p>
              <p>$4.2k</p>
            </div>
            <div class="trip">
              <img src="./Assets/sendDestination.svg" alt="sendDestination" />
              <p>12 Days Trip</p>
            </div>
          </div>
          </div>
          <div class="cities">
            <div class="cityImg">
            <img src="./Assets/europeDistination1.png" alt="destinationEurope" />
          </div>
          <div class="cityTrip">
            <span class="city">
              <p>Full Europe</p>
              <p>$5,42k</p>
            </span>
            <span class="trip">
              <img src="./Assets/sendDestination.svg" alt="sendDestination" />
              <p>28 Days Trip</p>
            </span>
          </div>
          </div>
        </div>
      </section>
      <section id="stepToBook" class="stepsToBook">
        <div class="stepText">
          <h5>Easy and Fast</h5>
          <h2>Book your next trip in 3 easy steps</h2>
          <span class="steps">
            <img src="./Assets/chooseDestination.svg" alt="chooseDestination" />
            <span>
              <h6>Choose Destination</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </span>
          </span>
          <span class="steps">
            <img src="./Assets/makePayment.svg" alt="makePayment" />
            <span>
              <h6>Make Payment</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </span>
          </span>
          <span class="steps">
            <img src="./Assets/arrivalTime.svg" alt="" />
            <span>
              <h6>Reach Airport on Selected Date</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </span>
          </span>
        </div>
        <div class="blurWrapper">
          <div class="tripPackage">
            <img src="./Assets/tripToGreece.svg" alt="tripToGreece" />
            <h6>Trip To Greece</h6>
            <p>14-29 June| by Robbin joseph</p>
            <span>
              <img src="./Assets/leaf.svg" alt="leaf" />
              <img src="./Assets/mapIcon.svg" alt="mapIcon" />
              <img src="./Assets/send.svg" alt="send" />
            </span>
            <span class="peopleLikes">
              <span class="peopleGoing">
                <img src="./Assets/peopleGoing.svg" alt="peopleGoing" />
                <p>24 people going</p>
              </span>
              <img src="./Assets/likes.svg" alt="likes" />
            </span>
            <div class="tripToRome">
              <div class="outGoing">
                <img src="./Assets/tripToRome.svg" alt="tripToRome" />
                <div class="going">
                  <h6>Ongoing</h6>
                  <p>Trip to rome</p>
                </div>
              </div>
              <h6>40% completed</h6>
              <div class="container">
                <div class="skills progress"></div>
              </div>
            </div>
            <div class="ecilpse"></div>
            </div>
        </div>
       </section>
        {/* TESTIMONIALS  */}
     <section class="testimonial">
        <div class="testimonies">
          <h5>Testimonials</h5>
          <h2>What people say
            about Us.</h2>
            <!-- ONCLICK JAVASCRIPT FUNCTION FOR THE CAROUSEL -->
            <div class="carouselDot" onclick="currentSlide(1)"> </div>
            <div class= "carouselDot" onclick="currentSlide(2)"></div>
            <div class="carouselDot" onclick="currentSlide(3)"></div>
        </div>
        <div>
          <div class="carouselTestimony carouselTestimony__visible">
            <img src="./Assets/ImageTestimonial.svg" alt="ImageTestimonial">
            <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
            <h6>Mike taylor</h6> 
            <h6>Lahore, Pakistan</h6>
          </div>
          <div class="carouselTestimony carouselTestimony__hidden">
            <img src="./Assets/ImageTestimonial.svg" alt="ImageTestimonial">
            <p>“Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet deserunt tempore ducimus unde aperiam ullam maiores inventore nesciunt nam consequuntur mollitia nostrum doloribus ad soluta, porro necessitatibus perferendis architecto dicta.”</p>
            <h6>Mike taylor</h6>
            <h6>Lahore, Pakistan</h6>
          </div>
          <div class="carouselTestimony carouselTestimony__hidden">
            <img src="./Assets/ImageTestimonial.svg" alt="ImageTestimonial">
            <p>“Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint ab natus laudantium consequatur ipsam ex..”</p>
            <h6>Mike taylor</h6>
            <h6>Lahore, Pakistan</h6>
          </div>
          <div class="arrow">
            <img class="arrowUp" onclick="plusSlides(-1)" src="./Assets/arrowUp.svg" alt="arrowUp">
            <img class="
            arrowDown" onclick="plusSlides(1)" src="./Assets/arrowDown.svg" alt="arrowDown">
          </div>
        </div>
      </section>
       {/* PARTNERS  */}
      <section id="flight" class="partners">
        <div class="partnerLogo">
          <a href="https://axon.com"><img src="./Assets/axon.svg" alt="axon" /></a>
        </div>
        <div class="partnerLogo">
          <a href="https://jetstar.com"><img src="./Assets/jetstar.svg" alt="jetstar" /></a>
        </div>
        <div class="partnerLogo">
          <a href="https://expedia.com"><img src="./Assets/expediaa.svg" alt="expedia" /></a>
        </div>
        <div class="partnerLogo">
          <a href="https://qantas.com"><img src="./Assets/qantas.svg" alt="qantas" /></a>
        </div>
        <div class="partnerLogo">
          <a href="https://alitalia.com"><img src="./Assets/alitalia.svg" alt="alitalia" /></a>
        </div>
      </section>
      <section id="subscribe" class="subscribe">
         <a href="https://telegram.com"><img src="./Assets/sendBig.svg" alt="telegram" /></a>
        <h3>Subscribe to get information, latest news and other
          interesting offers about Jadoo</h3>
          <div class="ecilpse1"><img src="./Assets/eclipseRight.svg" alt="eclipseRight"></div>
          <div class="ecilpse2"><img src="./Assets/eclipseLeft.svg" alt="eclipseLeft"></div>
          <form action="">
            <img src="./Assets/mail.svg" alt="mail">
          <label for="Email">  </label>
            <input type="email" name="Email"  id="Email" placeholder="Your email" />
            <input type="submit" value="Subscribe" id="submit" name="Subscribe" />
            <span id="errorEmail"></span>
        </form>
        <div class="littlestars">
          <img src="./Assets/littleStarDown.svg" alt="littleStarDown">
        </div>
      </section>
    </main> 
      
    </div>
  )
}\

export default Main