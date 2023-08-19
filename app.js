import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyAH3WyQpm4OpEJOqJSxv6HRrsB2fTS_OEI",
  authDomain: "sign-up-in-de7e8.firebaseapp.com",
  projectId: "sign-up-in-de7e8",
  storageBucket: "sign-up-in-de7e8.appspot.com",
  messagingSenderId: "638689549425",
  appId: "1:638689549425:web:9e93b161a022db6f9f0fd0",
  measurementId: "G-44S51TTMKG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

let signup_btn = document.getElementById("signup_btn")
signup_btn.addEventListener("click", function () {
  let email = document.getElementById("email")
  let password = document.getElementById("password")

  createUserWithEmailAndPassword(auth, email.value, password.value)
  console.log(email.value, password.value)
    .then((res) => {
      const user = res.user;
      console.log("user", user)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Registration Completed',
        showConfirmButton: false,
        timer: 1500
      })

      window.location.assign("index.html")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)
      Swal.fire({
        icon: 'error',
        title: 'Oops....',
        text: errorMessage,
      })
    });
})

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

