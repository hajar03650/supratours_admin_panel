const cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
cssLink.href = 'https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css';
document.head.appendChild(cssLink);

const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/toastify-js'; // Replace with your CDN URL
document.body.appendChild(script);


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

function getUserDisconnected() {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    boxAlert("User disconnected successfully!","green");
    setTimeout(() => {
        window.location.href = "/";
    }, 3000);
}