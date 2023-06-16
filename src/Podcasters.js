import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';


function Podcasters() {

const [ name, setName ] = useState("");
const [ email, setEmail ] = useState("");
const [ message, setMessage ] = useState("");
const [ phoneNumber, setPhoneNumber ] = useState("");
const [ isPodcaster, setIsPodcaster ] = useState(true);


/* Function to allow users to join the waitlist. */
const joinWaitlist = async (event) => {

   event.preventDefault();
   
   try {
     /* Sends a response to the backend and gives it the information needed for registration */
     await axios.post("http://localhost:3001/users/joinWaitlist", {
     name,
     email,
     phoneNumber,
     isPodcaster,
     message : message
     })
   
     alert("Sucessfully joined the waitlist!");
     window.location.reload();
   
   /* There was an error sending the information to the backend */
     } catch (err) {
     console.log(err)
     }
   }


return (
<>
<main className="page-wrapper">
   <header className="navbar fixed-top bg-light">
      <div className="container"><a className="navbar-brand" href="/">
         <img className="pt-3" draggable="false" style={{height: "4.5rem"}} src="assets/img/white.png"/></a>
         <a className="btn btn-dark btn-sm rounded-pill fs-sm order-lg-3 d-none d-sm-inline-flex" href="/" target="_blank" rel="noopener"><i className="ai-chart fs-xl me-2 ms-n1"></i>Drop a podcast</a>
      </div>
   </header>
   <section className="container pt-5  pb-sm-3 mt-5 mb-2 mb-md-3 mb-lg-4 mb-xxl-5">
      <h1 className="pt-new pb-3">Take your podcast public.</h1>
      <div className="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
         <div className="col-md-7 col-lg-6 mb-4 mb-md-0">
            <a className="d-block position-relative">
               <div className="bg-dark rounded-5 position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
               <img className="d-block position-relative zindex-2 mx-auto" draggable="false" src="assets/img/main/home.png" width="200" alt="Image" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250"/>
            </a>
         </div>
         <div className="col-md-5 col-xl-4 offset-lg-1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
            <div className="ps-md-3 ps-lg-0">
               <img className="d-block d-dark-mode-none mb-2 mb-lg-3" style={{height: "4rem"}} draggable="false" src="assets/img/main/black.svg" alt="Champion"/><img className="d-none d-dark-mode-block mb-2 mb-lg-3" src="assets/img/portfolio/brands/champion-blue-light.svg" alt="Champion"/>
               <h2 className="h4">Release Features of your Podcast</h2>
               <p className="fs-lg pb-3 pb-lg-4 mb-3">Opting to make your podcast available to the public via a "Drop" signifies a momentous step in your creative expedition. Lollywest enables you to release features ("shares") of your podcast to fans and investors, allowing them to be acquired and traded. This creates an avenue for broader revenue streams, accessibility, and engagement.</p>
            </div>
         </div>
      </div>
      <div className="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
         <div className="col-md-7 col-lg-6 mb-4 mb-md-0">
            <a className="d-block position-relative">
               <div className="bg-dark rounded-5 position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
               <img className="d-block position-relative zindex-2 mx-auto" draggable="false" src="assets/img/main/home.png" width="200" alt="Image" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250"/>
            </a>
         </div>
         <div className="col-md-5 col-xl-4 offset-lg-1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
            <div className="ps-md-3 ps-lg-0">
               <img className="d-block d-dark-mode-none mb-2 mb-lg-3" style={{height: "4rem"}} draggable="false" src="assets/img/main/active.svg" alt="Champion"/><img className="d-none d-dark-mode-block mb-2 mb-lg-3" src="assets/img/portfolio/brands/champion-blue-light.svg" alt="Champion"/>
               <h2 className="h4">Community Engagement</h2>
               <p className="fs-lg pb-3 pb-lg-4 mb-3">Lollywest fosters a vibrant community where podcasters, investors, and enthusiasts can connect, collaborate, and engage with one another. Our platform enables interaction, knowledge-sharing, and potential partnerships among podcasters and investors who share similar interests and goals. This community engagement enhances the overall podcasting and investment experience within our platform.</p>
            </div>
         </div>
      </div>
      <div className="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
         <div className="col-md-7 col-lg-6 mb-4 mb-md-0">
            <a className="d-block position-relative">
               <div className="bg-dark rounded-5 position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
               <img className="d-block position-relative zindex-2 mx-auto" draggable="false" src="assets/img/main/ye.png" width="200" alt="Image" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250"/>
            </a>
         </div>
         <div className="col-md-5 col-xl-4 offset-lg-1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
            <div className="ps-md-3 ps-lg-0">
               <img className="d-block d-dark-mode-none mb-2 mb-lg-3" style={{height: "4rem"}} draggable="false"  src="assets/img/main/celebrate.svg" alt="Champion"/><img className="d-none d-dark-mode-block mb-2 mb-lg-3" src="assets/img/portfolio/brands/champion-blue-light.svg" alt="Champion"/>
               <h2 className="h4">Fanbase Expansion</h2>
               <p className="fs-lg pb-3 pb-lg-4 mb-3">Setting money aside, by participating in Lollywest, you gain entry into a fan base that was previously unfamiliar to you. These newfound supporters have the potential to not only purchase your offerings but also contribute to your current sources of income, such as Patreon, YouTube, Spotify, or Apple Podcasts.</p>
            </div>
         </div>
      </div>
   </section>
   <section className="container pb-xl-5">
      <div className="bg-secondary rounded-5 py-5 px-4 p-sm-5">
         <div className="d-lg-flex align-items-center g-0 py-2 py-sm-3 py-md-4 p-xl-5">
            <div className="order-lg-2 text-center text-lg-start ps-lg-5 mx-auto me-lg-0">
               <h1 className="h1 pb-2 mb-2">We play well with others.</h1>
               <p className="fs-lg pb-3 pb-lg-4 mb-3">Lollywest cares about your popularity, growth, and financial well being. We help you expand your fanbase, outreach, improve content via partnerships, and revenue on all your desired platforms.</p>
            </div>
            <div className="order-lg-1 w-100 mx-auto mx-lg-0" style={{maxWidth: "300px"}}>
            <div className="row row-cols-3 g-3 g-sm-4 g-lg-3 g-xl-4">
               <div className="col">
                  <div className="rounded-3" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="300"><img draggable="false" src="assets/img/apodcasts.svg" alt="Bing"/></div>
               </div>
               <div className="col">
                  <div className="rounded-3" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="500"><img draggable="false" src="assets/img/tiktok.svg" alt="Facebook"/></div>
               </div>
               <div className="col">
                  <div className="rounded-3" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="200"><img className="d-dark-mode-none" draggable="false"  src="assets/img/google.svg" alt="Facebook"/><img className="d-none d-dark-mode-block" src="assets/img/landing/marketing-agency/tools/microsoft-light.svg" alt="Facebook"/></div>
               </div>
               <div className="col">
                  <div className=" rounded-3" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="800"><img draggable="false" src="assets/img/twitter.svg" alt="Google"/></div>
               </div>
               <div className="col">
                  <div className="bg-white rounded-3" data-aos="zoom-in" data-aos-easing="ease-out-back"><img className="d-dark-mode-none" draggable="false"  src="assets/img/main/black.svg" alt="Google Ads"/><img className="d-none d-dark-mode-block" src="assets/img/landing/marketing-agency/tools/google-ads-light.svg" alt="Google Ads"/></div>
               </div>
               <div className="col">
                  <div className="rounded-3" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="600"><img className="d-dark-mode-none" draggable="false" src="assets/img/youtube.svg" alt="Admitad"/><img className="d-none d-dark-mode-block" src="assets/img/landing/marketing-agency/tools/admitad-light.svg" alt="Admitad"/></div>
               </div>
               <div className="col">
                  <div className="rounded-3" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="400"><img className="d-dark-mode-none" draggable="false" src="assets/img/patreon.svg" alt="Google Analytics"/><img className="d-none d-dark-mode-block" draggable="false" src="assets/img/landing/marketing-agency/tools/google-analytics-light.svg" alt="Google Analytics"/></div>
               </div>
               <div className="col">
                  <div className="rounded-3" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="700"><img className="d-dark-mode-none" draggable="false" src="assets/img/spotify.svg" alt="Instagram"/><img className="d-none d-dark-mode-block" src="assets/img/landing/marketing-agency/tools/instagram-light.svg" alt="Instagram"/></div>
               </div>
               <div className="col">
                  <div className="rounded-3" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="100"><img className="d-dark-mode-none" draggable="false" src="assets/img/instagram.svg" alt="TikTok"/><img className="d-none d-dark-mode-block" src="assets/img/landing/marketing-agency/tools/tiktok-light.svg" alt="TikTok"/></div>
               </div>
            </div>
            <div className="d-lg-none text-center pt-4 mt-2 mt-md-3" data-aos="zoom-in" data-aos-easing="ease-out-back" data-aos-delay="900"></div>
         </div>
      </div>
      </div>
   </section>
   <section className="container pt-2 pb-sm-3 mt-5 mb-2 mb-md-3 mb-lg-4 mb-xxl-5">
      <div className="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
         <div className="col-md-7 col-lg-6 mb-4 mb-md-0">
            <a className="d-block position-relative">
               <div className="bg-dark rounded-5 position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
               <img className="d-block position-relative zindex-2 mx-auto" draggable="false" src="assets/img/main/home.png" width="200" alt="Image" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250"/>
            </a>
         </div>
         <div className="col-md-5 col-xl-4 offset-lg-1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
            <div className="ps-md-3 ps-lg-0">
               <img className="d-block d-dark-mode-none mb-2 mb-lg-3" style={{height: "4rem"}} draggable="false" src="assets/img/main/brain.svg" alt="Champion"/><img className="d-none d-dark-mode-block mb-2 mb-lg-3" src="assets/img/portfolio/brands/champion-blue-light.svg" alt="Champion"/>
               <h2 className="h4">Your IP is Protected</h2>
               <p className="fs-lg pb-3 pb-lg-4 mb-3">Lollywest respects and enforces copyright and trademark protections. This includes ensuring that podcasters have the necessary rights to the content they produce and that the platform itself does not infringe on any existing copyrights or trademarks.</p>
            </div>
         </div>
      </div>
      <div className="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
         <div className="col-md-7 col-lg-6 mb-4 mb-md-0">
            <a className="d-block position-relative">
               <div className="bg-dark rounded-5 position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
               <img className="d-block position-relative zindex-2 mx-auto" draggable="false" src="assets/img/main/home.png" width="200" alt="Image" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250"/>
            </a>
         </div>
         <div className="col-md-5 col-xl-4 offset-lg-1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
            <div className="ps-md-3 ps-lg-0">
               <img className="d-block d-dark-mode-none mb-2 mb-lg-3" style={{height: "4rem"}} draggable="false" src="assets/img/main/love.svg" alt="Champion"/><img className="d-none d-dark-mode-block mb-2 mb-lg-3" src="assets/img/portfolio/brands/champion-blue-light.svg" alt="Champion"/>
               <h2 className="h4">Supportive Environment</h2>
               <p className="fs-lg pb-3 pb-lg-4 mb-3">Lollywest goes beyond being a trading platform. We act as an incubator and provide valuable resources, support, and guidance to podcasters. We offer mentorship, industry insights, and networking opportunities to help podcasters enhance their content, grow their audience, and attract potential investors. By fostering a supportive environment, we empower podcasters to thrive and maximize the value of their podcasts.</p>
            </div>
         </div>
      </div>
      <div className="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
         <div className="col-md-7 col-lg-6 mb-4 mb-md-0">
            <a className="d-block position-relative">
               <div className="bg-dark rounded-5 position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
               <img className="d-block position-relative zindex-2 mx-auto" draggable="false" src="assets/img/main/home.png" width="200" alt="Image" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250"/>
            </a>
         </div>
         <div className="col-md-5 col-xl-4 offset-lg-1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
            <div className="ps-md-3 ps-lg-0">
               <img className="d-block d-dark-mode-none mb-2 mb-lg-3" style={{height: "4rem"}} draggable="false" src="assets/img/main/box.svg" alt="Champion"/><img className="d-none d-dark-mode-block mb-2 mb-lg-3" src="assets/img/portfolio/brands/champion-blue-light.svg" alt="Champion"/>
               <h2 className="h4">Our Trading Platform</h2>
               <p className="fs-lg pb-3 pb-lg-4 mb-3">Lollywest serves as a secure and user-friendly trading platform where investors can buy and sell podcast stocks. Our platform facilitates the seamless trading of these unique assets, providing real-time market data, order matching algorithms, and transparent trading processes. Investors can explore a range of podcast stocks, evaluate their potential, and make investment decisions based on their preferences and market insights.</p>
            </div>
         </div>
      </div>
   </section>
   <section className="bg-secondary pt-5 pb-4">
      <div className="container py-lg-2 py-xl-4 py-xxl-5">
         <div className="row mt-1 pt-sm-2 pt-md-3 pt-lg-4">
            <div className="col-lg-5 mb-5 mb-lg-0">
               <h2 className="h1 pb-2">Interested in taking your podcast public?</h2>
               <form className="needs-validation row g-4" onSubmit={joinWaitlist} novalidate>
                  <div className="col-lg-10">
                     <label className="form-label fs-base" for="name">Name</label>
                     <input className="form-control form-control-lg" type="text" onChange={(event) => setName(event.target.value)} placeholder="Your name" required id="name"/>
                     <div className="invalid-feedback">Please enter your name!</div>
                  </div>
                  <div className="col-lg-10">
                     <label className="form-label fs-base" for="email">Email</label>
                     <input className="form-control form-control-lg" type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Email address" required id="email"/>
                     <div className="invalid-feedback">Please provide a valid email address!</div>
                  </div>
                  <div className="col-lg-10">
                     <label className="form-label fs-base" for="number">Phone Number</label>
                     <input className="form-control form-control-lg" type="number" onChange={(event) => setPhoneNumber(event.target.value)} placeholder="360-809-2422" required id="email"/>
                     <div className="invalid-feedback">Please provide a valid email address!</div>
                  </div>
                  <div className="col-lg-10">
                     <label className="form-label fs-base" for="message">Message</label>
                     <textarea className="form-control form-control-lg" placeholder="Your message"  onChange={(event) => setMessage(event.target.value)} rows="4" required id="message"></textarea>
                     <div className="invalid-feedback">Please write your message!</div>
                  </div>
                  <div className="col-lg-10">
                     <button className="btn btn-lg btn-dark rounded-pill mt-2" type="submit">Send request</button>
                  </div>
               </form>
            </div>
            <div className="col-lg-7 col-xl-6 offset-xl-1">
               <div className="row row-cols-1 row-cols-sm-2">
                  <div className="col">
                     <div className="card border-0 mb-4">
                        <div className="card-body">
                           <h3 className="h4" style={{maxWidth: "180px"}}>Creative rights.</h3>
                        </div>
                     </div>
                     <div className="card border-0 bg-dark dark-mode">
                        <div className="card-body">
                           <h3 className="h4" style={{maxWidth: "180px"}}>Enjoy creative freedom.</h3>
                        </div>
                     </div>
                  </div>
                  <div className="col d-flex flex-column pt-4 mt-sm-3">
                     <div className="card border-0 order-sm-2 mb-4 mb-sm-0">
                        <div className="card-body">
                           <h3 className="h4" style={{maxWidth: "180px"}}>Expand your network.</h3>
                        </div>
                     </div>
                     <div className="card border-0 bg-dark dark-mode order-sm-1 mb-sm-4">
                        <div className="card-body">
                           <h3 className="h4" style={{maxWidth: "180px"}}>Grow revenue streams. $</h3>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>
</main>
</>
);
}
export default Podcasters;