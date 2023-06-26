import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";



function LandingPage() {

   // TODO: Add SDKs for Firebase products that you want to use
   // https://firebase.google.com/docs/web/setup#available-libraries

   // Your web app's Firebase configuration
   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
   const firebaseConfig = {
      apiKey: "AIzaSyBf9f-UBY2N1G_jYqiiheCJPZ__4Ih6Z1s",
      authDomain: "lollywest-abfa6.firebaseapp.com",
      databaseURL: "https://lollywest-abfa6-default-rtdb.firebaseio.com",
      projectId: "lollywest-abfa6",
      storageBucket: "lollywest-abfa6.appspot.com",
      messagingSenderId: "773997592011",
      appId: "1:773997592011:web:28bdd397dec30c44a48a4e",
      measurementId: "G-LZXP6QF51X"
   };

   const firebaseApp = initializeApp(firebaseConfig);
   const firestore = getFirestore(firebaseApp);


   useEffect(() => {
      const submit = document.querySelector("#submit");
      submit.addEventListener('click', submitData);
   }, []);

   function submitData() {

      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var phoneNumber = document.getElementById("phoneNumber").value;
      var isPodcaster = document.getElementById("isPodcaster").value;

      try {
         await addDoc(collection(firestore, "users"), {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            isPodcaster: isPodcaster
         });
         alert('Added to the waitlist!');
         window.location.reload();
      } catch (err) {
         console.log(err);
      }


   };


   return (
      <>
         <main className="page-wrapper">
            <div className="d-lg-flex position-relative h-100">

               <div className="d-flex flex-column align-items-center w-lg-50 h-100 px-3 px-lg-5 pt-5">
                  <div className="w-100 mt-auto" style={{ maxWidth: "526px" }}>
                     <img className="pt-3" draggable="false" src="assets/img/white.png" />
                     <h5 className="display-5 text-center text-lg-start pt-new pb-sm-2 pb-md-3">Where podcasters & fans thrive together. </h5>
                     <h4 className="fs-lg text-center text-xl-start  mx-auto mx-lg-0 mb-5">Stream and trade features of your favorite podcasts.</h4>
                     <form className="needs-validation">
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-1 row-cols-lg-2">
                           <div className="col mb-3">
                              <input className="form-control form-control-lg" type="text" id="name" placeholder="Name" />
                           </div>
                           <div className="col mb-3">
                              <input className="form-control form-control-lg" type="text" id="phoneNumber" placeholder="Phone #" />
                           </div>
                        </div>
                        <div className="mb-3">
                           <div className="position-relative"><i className="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                              <input className="form-control form-control-lg ps-5" type="email" id="email" placeholder="Email address" />
                           </div>
                        </div>
                        <div className="pb-2">
                           <div className="form-check my-2">
                              <input className="form-check-input" type="checkbox" id="isPodcaster" />
                              <label className="form-check-label ms-1" htmlFor="terms" >Are you a podcaster?</label>
                           </div>
                        </div>
                        <button className="btn btn-lg btn-info w-100 mb-4" type="button" id="submit"> Sign up for the waitlist</button>
                        <div className="row row-cols-1 row-cols-sm-2 gy-3">
                           <div className="col"><a className="btn btn-icon btn-outline-secondary btn-instagram btn-lg w-100" href="/Podcasters"><i className="ai-headphone fs-xl me-2"></i>Podcasters</a></div>
                           <div className="col"><a className="btn btn-icon btn-outline-secondary btn-evernote btn-lg w-100" href="/Investors"><i className="ai-bar-chart-1 fs-xl me-2"></i>Investors</a></div>
                        </div>
                     </form>
                  </div>
                  <p className="w-100 fs-sm pt-5 mt-auto mb-5" style={{ maxWidth: "526px" }}><span className="text-muted">&copy; All rights reserved. Made by</span><a className="nav-link d-inline-block p-0 ms-1" target="_blank" rel="noopener">Lollywest Markets, LLC.</a></p>
               </div>
               <div className="w-50 bg-size-cover bg-repeat-0 bg-position-center" style={{ backgroundImage: "url('assets/img/podcast3.svg')" }}></div>
            </div>
         </main>
      </>
   );
}
<script>

</script>

export default LandingPage;