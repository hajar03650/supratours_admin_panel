// Import CSS CDN
const cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
cssLink.href = 'https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css';
document.head.appendChild(cssLink);

const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/toastify-js'; // Replace with your CDN URL
document.body.appendChild(script);

const userToken = localStorage.getItem("token");

function verifyLogin() {
    if (userToken) {
        
    }
}

function getUserDisconnected() {
    localStorage.removeItem("token");
    boxAlert("User disconnected successfully!","green");
    setTimeout(() => {
        window.location.href = "/";
    }, 3000);
}

function boxAlert(msg,color) {
    Toastify({
        text: msg,
        duration: 3000,
        position:"left",
        offset:{
            x:0,
            y:80
        },
        style: {
          background: color,
        }
      }).showToast();
}

window.addEventListener("DOMContentLoaded", ()=> {
    verifyLogin();
})