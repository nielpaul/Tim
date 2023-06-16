import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';


function Investors() {


const [ name, setName ] = useState("");
const [ email, setEmail ] = useState("");
const [ message, setMessage ] = useState("");
const [ phoneNumber, setPhoneNumber ] = useState("");
const [ isPodcaster, setIsPodcaster ] = useState(false);

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
<main className="page-wrapper bg-black" >
   <header className="navbar fixed-top bg-black">
      <div className="container"><a className="navbar-brand" href="/">
         <img className="pt-3" draggable="false" style={{height: "4.2rem"}} src="assets/img/main/black.png"/></a>
         <a className="btn btn-ligh btn-sm rounded-pill fs-sm order-lg-3 d-none d-sm-inline-flex" href="/" rel="noopener"><i className="ai-bell fs-xl me-2 ms-n1"></i>Join the wailist</a>
      </div>
   </header>
   <section className="container pt-5  pb-sm-3 mt-5 mb-2 mb-md-3 mb-lg-4 mb-xxl-5" >
      <h1 className="pt-new text-light pb-3">Don't just listen... be a part of it.</h1>
      <div className="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
         <div className="col-md-7 col-lg-6 mb-4 mb-md-0">
            <a className="d-block position-relative">
               <div className="bg-dark rounded-5 position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
               <img className="d-block position-relative zindex-2 mx-auto" draggable="false" src="assets/img/main/home.png" width="200" alt="Image" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250"/>
            </a>
         </div>
         <div className="col-md-5 col-xl-4 offset-lg-1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
            <div className="ps-md-3 ps-lg-0">
               <img className="d-block d-dark-mode-none mb-2 mb-lg-3" style={{height: "4rem"}} draggable="false" src="assets/img/main/stream.svg" alt="Champion"/><img className="d-none d-dark-mode-block mb-2 mb-lg-3" alt="Champion"/>
               <h2 className="h4 text-light">Buy and Trade "Features" of your Favorite Podcasts</h2>
               <p className="fs-lg pb-3 pb-lg-4 mb-3 text-light">You know what you enjoy, you know what you want. Supporting creators doesn't have to be a one way street, as your chosen podcasts gain popularity so will your success. </p>
            </div>
         </div>
      </div>
      <div className="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
         <div className="col-md-7 col-lg-6 mb-4 mb-md-0">
            <a className="d-block position-relative">
               <div className="bg-dark rounded-5 position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
               <img className="d-block position-relative zindex-2 mx-auto" draggable="false" src="assets/img/Player.png" width="200" alt="Image" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250"/>
            </a>
         </div>
         <div className="col-md-5 col-xl-4 offset-lg-1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
            <div className="ps-md-3 ps-lg-0">
               <img className="d-block d-dark-mode-none mb-2 mb-lg-3" style={{height: "4rem"}} draggable="false" src="assets/img/main/stream1.svg" alt="Champion"/><img className="d-none d-dark-mode-block mb-2 mb-lg-3" alt="Champion"/>
               <h2 className="h4 text-light">Stream Podcasts</h2>
               <p className="fs-lg pb-3 pb-lg-4 mb-3 text-light">Aren't you sick of ads? Stream podcasts ad-free on Lollywest. Follow creators to keep up to date on feature prices and special content.</p>
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
               <img className="d-block d-dark-mode-none mb-2 mb-lg-3" style={{height: "4rem"}} draggable="false" src="assets/img/main/message.svg" alt="Champion"/><img className="d-none d-dark-mode-block mb-2 mb-lg-3"  alt="Champion"/>
               <h2 className="h4 text-light">Blah Blah, let's get Social</h2>
               <p className="fs-lg pb-3 pb-lg-4 mb-3 text-light">Enjoy open discussions with podcasters, follow your friends to see their favorite podcasts and what features they are trading.</p>
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
               <img className="d-block d-dark-mode-none mb-2 mb-lg-3" style={{height: "4rem"}} draggable="false" src="assets/img/main/yeye.svg" alt="Champion"/><img className="d-none d-dark-mode-block mb-2 mb-lg-3"  alt="Champion"/>
               <h2 className="h4 text-light">Make that Money $</h2>
               <p className="fs-lg pb-3 pb-lg-4 mb-3 text-light">With real-time market data, financial statements, and boards. Making great decisions has never been easier. Thrive together. </p>
            </div>
         </div>
      </div>
      <div className="row align-items-center pt-xl-2 pb-5 mb-lg-2 mb-xl-3 mb-xxl-4">
         <div className="col-md-7 col-lg-6 mb-4 mb-md-0">
            <a className="d-block position-relative">
               <div className="bg-dark rounded-5 position-absolute top-0 start-0 w-100 h-100" data-aos="zoom-in" data-aos-duration="600" data-aos-offset="250"></div>
               <img className="d-block position-relative zindex-2 mx-auto" draggable="false" src="assets/img/Player.png" width="200" alt="Image" data-aos="fade-in" data-aos-duration="400" data-aos-offset="250"/>
            </a>
         </div>
         <div className="col-md-5 col-xl-4 offset-lg-1" data-aos="fade-up" data-aos-duration="400" data-aos-offset="170">
            <div className="ps-md-3 ps-lg-0">
               <img className="d-block d-dark-mode-none mb-2 mb-lg-3" style={{height: "4rem"}} draggable="false" src="assets/img/main/badge.svg" alt="Champion"/><img className="d-none d-dark-mode-block mb-2 mb-lg-3" alt="Champion"/>
               <h2 className="h4 text-light">Be top tier</h2>
               <p className="fs-lg pb-3 pb-lg-4 mb-3 text-light">See podcasts on the come up so you can get in first. Unlike other trading platforms, Lollywest releases clear and understandable market data that can help you make more cash.
               </p>
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
               <img className="d-block d-dark-mode-none mb-2 mb-lg-3" style={{height: "4rem"}}draggable="false" src="assets/img/main/world.svg" alt="Champion"/><img className="d-none d-dark-mode-block mb-2 mb-lg-3"  alt="Champion"/>
               <h2 className="h4 text-light">Discover</h2>
               <p className="fs-lg pb-3 pb-lg-4 mb-3 text-light">Discover new podcasts and explore your interests. From sports to cooking, Lollywest has you covered.</p>
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
               <img className="d-block d-dark-mode-none mb-2 mb-lg-3" style={{height: "4rem"}}draggable="false"  src="assets/img/main/safe.svg" alt="Champion"/><img className="d-none d-dark-mode-block mb-2 mb-lg-3"  alt="Champion"/>
               <h2 className="h4 text-light">Safe and Prosperous</h2>
               <p className="fs-lg pb-3 pb-lg-4 mb-3 text-light">Lollywest maintains a robust and secure trading infrastructure to facilitate the buying and selling of podcast features. We provide a trustworthy trading environment for investors. Our platform employs efficient order matching algorithms and real-time market data to ensure fair and efficient trading.</p>
            </div>
         </div>
      </div>
   </section>
   <section className="bg-dark pt-5 pb-4">
      <div className="container py-lg-2 py-xl-4 py-xxl-5">
         <div className="row mt-1 pt-sm-2 pt-md-3 pt-lg-4">
            <div className="col-lg-5 mb-5 mb-lg-0">
               <h2 className="h1 text-white pb-2">Join the waitlist</h2>
               <form className="needs-validation row g-4" onSubmit={joinWaitlist} novalidate>
                  <div className="col-lg-10">
                     <label className="form-label text-white fs-base" for="name">Name</label>
                     <input className="form-control form-control-lg text-light" type="text" onChange={(event) => setName(event.target.value)} placeholder="Your name" required id="name"/>
                     <div className="invalid-feedback text-white">Please enter your name!</div>
                  </div>
                  <div className="col-lg-10">
                     <label className="form-label text-white fs-base" for="email">Email</label>
                     <input className="form-control form-control-lg text-light" type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Email address" required id="email"/>
                     <div className="invalid-feedback text-white">Please provide a valid email address!</div>
                  </div>
                  <div className="col-lg-10">
                     <label className="form-label text-white fs-base" for="number">Phone Number</label>
                     <input className="form-control text-white form-control-lg text-light" type="number" onChange={(event) => setPhoneNumber(event.target.value)} placeholder="360-809-2422" required id="email"/>
                     <div className="invalid-feedback">Please provide a valid email address!</div>
                  </div>
                  <div className="col-lg-10">
                     <label className="form-label text-white fs-base" for="message">Message</label>
                     <textarea className="form-control form-control-lg text-light" onChange={(event) => setMessage(event.target.value)} placeholder="Your message" rows="4" required id="message"></textarea>
                     <div className="invalid-feedback text-white">Please write your message!</div>
                  </div>
                  <div className="col-lg-10">
                     <button className="btn btn-lg btn-light rounded-pill mt-2" type="submit">Join</button>
                  </div>
               </form>
            </div>
            <div className="col-lg-7 col-xl-6 offset-xl-1">
               <div className="row row-cols-1 row-cols-sm-2">
                  <div className="col">
                     <div className="card border-0 mb-4">
                        <div className="card-body">
                           <h3 className="h4" style={{maxWidth: "180px"}}>Get social!</h3>
                        </div>
                     </div>
                     <div className="card border-0 bg-black dark-mode">
                        <div className="card-body">
                           <h3 className="h4" style={{maxWidth: "180px"}}>Create a base.</h3>
                        </div>
                     </div>
                  </div>
                  <div className="col d-flex flex-column pt-4 mt-sm-3">
                     <div className="card border-0 order-sm-2 mb-4 mb-sm-0">
                        <div className="card-body">
                           <h3 className="h4" style={{maxWidth: "180px"}}>Cash money. $</h3>
                        </div>
                     </div>
                     <div className="card border-0 bg-black dark-mode order-sm-1 mb-sm-4">
                        <div className="card-body">
                           <h3 className="h4" style={{maxWidth: "180px"}}>Play a role.</h3>
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
export default Investors;