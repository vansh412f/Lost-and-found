



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
const firebaseConfig = {
    apiKey: "AIzaSyDMQ9A8RkbA21ddfNjxu2CTTeiHa4Z7Pqk",
    authDomain: "login-f20d4.firebaseapp.com",
    projectId: "login-f20d4",
    storageBucket: "login-f20d4.appspot.com",
    messagingSenderId: "698209503680",
    appId: "1:698209503680:web:2ed88a91365d6f7c4b2025",
    measurementId: "G-81GV5ERW7S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();
const googleLogin = document.getElementById("googleauth")

googleLogin.addEventListener("click", function () {



    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
            window.location.href="logged.html";

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
})

function updateUserProfile(user){
    const userName = user.displayName;
    const userEmail = user.email;
    const userProfilePicture = user.photoURL;

    document.getElementById("userName").textContent = userName ;
    document.getElementById("userEmail").textContent =  userEmail ;
    document.getElementById("userProfilePicture").src = userProfilePicture  ;
}

updateUserProfile();



const analytics = getAnalytics(app);
