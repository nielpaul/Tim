import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';


function LandingPage() {

const [ name, setName ] = useState("");
const [ email, setEmail ] = useState("");
const [ message, setMessage ] = useState("");
const [ phoneNumber, setPhoneNumber ] = useState("");
const [ isPodcaster, setIsPodcaster ] = useState(false);
const checkIsPodcaster = () => {
setIsPodcaster(!isPodcaster)
}

/* Function to allow users to join the waitlist. */
const joinWaitlist = async (event) => {

  event.preventDefault();
  
  try {
    /* Sends a response to the backend and gives it the information needed for registration */
    await axios.post("http://localhost:3001/users/joinWaitlist", {
    name,
    email,
    phoneNumber,
    isPodcaster
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
   <div className="d-lg-flex position-relative h-100">
      <a className="pt-2 pb-1 btn position-absolute top-0 end-0 p-0 mt-3 me-3 mt-sm-4 me-sm-4" href="account-signin.html"><img className="pb-4" draggable="false" src="assets/img/app.svg"/></a>
      <div className="d-flex flex-column align-items-center w-lg-50 h-100 px-3 px-lg-5 pt-5">
         <div className="w-100 mt-auto" style={{maxWidth: "526px"}}>
         <img className="pt-3" draggable="false" src="assets/img/white.png"/>
         <h4 className="display-4 text-center text-lg-start pt-5 pb-sm-2 pb-md-3">Invest in creators, invest in yourself.</h4>
         <h5 className="fs-lg text-center text-lg-start  mx-auto mx-lg-0 mb-5">Be a part of what you love. We enable podcasters and their fans to thrive together. Join the Lollywest community to listen, discuss, and trade features of your favorite podcasts.</h5>
         <form className="needs-validation" onSubmit={joinWaitlist} novalidate>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-2">
               <div className="col mb-3">
                  <input className="form-control form-control-lg" type="text" placeholder="Name" onChange={(event) => setName(event.target.value)} required/>
               </div>
               <div className="col mb-3">
                  <input className="form-control form-control-lg" type="text" placeholder="Phone #" onChange={(event) => setPhoneNumber(event.target.value)} required/>
               </div>
            </div>
            <div className="mb-3">
               <div className="position-relative"><i className="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                  <input className="form-control form-control-lg ps-5" type="email" placeholder="Email address" onChange={(event) => setEmail(event.target.value)} required/>
               </div>
            </div>
            <div className="pb-2">
               <div className="form-check my-2">
                  <input className="form-check-input" type="checkbox" id="terms" onClick={checkIsPodcaster}/>
                  <label className="form-check-label ms-1" for="terms" onChange={(event) => setIsPodcaster(event.target.value)} >Are you a podcaster?</label>
               </div>
            </div>
            <button className="btn btn-lg btn-dark w-100 mb-4" type="submit">Sign up for the waitlist</button>
            <div className="row row-cols-1 row-cols-sm-2 gy-3">
               <div className="col"><a className="btn btn-icon btn-outline-secondary btn-instagram btn-lg w-100" href="/Podcasters"><i className="ai-headphone fs-xl me-2"></i>Podcasters</a></div>
               <div className="col"><a className="btn btn-icon btn-outline-secondary btn-evernote btn-lg w-100" href="/Investors"><i className="ai-bar-chart-1 fs-xl me-2"></i>Investors</a></div>
            </div>
         </form>
      </div>
      <p className="w-100 fs-sm pt-5 mt-auto mb-5" style={{maxWidth: "526px"}}><span className="text-muted">&copy; All rights reserved. Made by</span><a className="nav-link d-inline-block p-0 ms-1"  target="_blank" rel="noopener">Lollywest Markets, LLC.</a></p>
   </div>
   <div className="w-50 bg-size-cover bg-repeat-0 bg-position-center" style={{ backgroundImage: "url('assets/img/podcast3.svg')" }}></div>
   </div>
</main>
</>
);
}

export default LandingPage;