import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
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

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log(user);

        const userName = user.displayName;
        const userEmail = user.email;
        const userProfilePicture = user.photoURL;

        document.getElementById("userName").textContent = userName;
        document.getElementById("userEmail").textContent = userEmail;
        document.getElementById("userProfilePicture").src = userProfilePicture;


        // ...
    } else {
        window.location.href = "index.html";
        // User is signed out
        // ...
    }
});
// Initialize the dropdowns manually (optional)
var dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
var dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    return new bootstrap.Dropdown(dropdownToggleEl);
});

// Hide dropdown when clicking outside of it
document.addEventListener('click', function(event) {
    var isClickInsideDropdown = dropdownElementList.some(function(dropdownToggleEl) {
        return dropdownToggleEl.contains(event.target);
    });

    if (!isClickInsideDropdown) {
        dropdownList.forEach(function(dropdown) {
            dropdown.hide();
        });
    }
});


// Example logout function
document.getElementById('logoutButton').addEventListener('click', () => {
    const auth = getAuth();
    auth.signOut().then(() => {
        // Sign-out successful, redirect or update UI accordingly
        window.location.href = "index.html"; // Redirect to login page or any other page
    }).catch((error) => {
        console.error("Sign-out error:", error);
    });
});
