// Base URL for API
const API_BASE_URL = 'http://127.0.0.1:8000/api';

// Helper function to decode JWT token
const parseJwt = (token) => {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (error) {
        return null;
    }
};

// Helper function to check if the token is expired
const isTokenExpired = (token) => {
    const decodedToken = parseJwt(token);
    if (!decodedToken) {
        return true;
    }
    const now = Date.now().valueOf() / 1000;
    return decodedToken.exp < now;
};

const token = localStorage.getItem("access_token");
if (!token || isTokenExpired(token)) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    boxAlert("Token invalid or expired! please login.","red");
    const blocking = document.createElement("div");
    const ul = document.querySelector('nav ul');
    ul.firstChild.parentElement.style.display = "none";
    blocking.className = "blocking";
    document.body.insertBefore(blocking,document.body.firstChild);
    setTimeout(() => {
        window.location.href = "/login";
    }, 3000);
}

else {
    const disconnectBtn = document.querySelector('nav ul').lastElementChild;
    disconnectBtn.addEventListener("click", () => {
        getUserDisconnected();
    })
}

// Helper function to make fetch requests
const fetchData = async (url, method = 'GET', body = null, headers = {}) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            ...headers
        },
        body: body ? JSON.stringify(body) : null
    };
    const response = await fetch(`${API_BASE_URL}${url}`, options);
    if (!response) {
        const error = await response.json();
        boxAlert("Error: ", error.message);
        throw new Error(error.detail || 'Something went wrong');
    }
    return response.json();
};

// Chauffeur functions ...
const getChauffeurs = async () => {
    return fetchData('/chauffeurs/');
};

const createChauffeur = async (chauffeur) => {
    const response = fetchData('/chauffeurs/', 'POST', chauffeur);
    if (response) { 
        boxAlert("Chauffeur added successfully","green");
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
    else boxAlert("Error adding Chauffeur","red");
};

const getChauffeur = async (id) => {
    return fetchData(`/chauffeurs/${id}/`);
};

const updateChauffeur = async (id, chauffeur) => {
    return fetchData(`/chauffeurs/${id}/`, 'PUT', chauffeur);
};

const deleteChauffeur = async (id,row) => {
    const response = fetchData(`/chauffeurs/${id}/`, 'DELETE');
    if (response) { 
        boxAlert("Chauffeur deleted","green");
        row.remove();
    }
    else boxAlert("Error deleting Chauffeur","red");
};

// Autocar functions
const getAutocars = async () => {
    return fetchData('/autocars/');
};

const createAutocar = async (autocar) => {
    const response = fetchData('/autocars/', 'POST', autocar);
    if (response) {
        boxAlert("Autocar added successfully","green");
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
    else boxAlert("Error adding Autocar","red");
};

const getAutocar = async (id) => {
    return fetchData(`/autocars/${id}/`);
};

const updateAutocar = async (id, autocar) => {
    return fetchData(`/autocars/${id}/`, 'PUT', autocar);
};

const deleteAutocar = async (id,row) => {
    const response = fetchData(`/autocars/${id}/`, 'DELETE');
    if (response) { 
        boxAlert("Autocar deleted","green");
        row.remove();
    }
    else boxAlert("Error deleting Autocar","red");
};

// Carte functions
const getCartes = async () => {
    return fetchData('/cartes/');
};

const createCarte = async (carte) => {
    const response = fetchData('/cartes/', 'POST', carte);
    if (response) { 
        boxAlert("Card added successfully","green");
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
    else boxAlert("Error adding Card","red");
};

const getCarte = async (id) => {
    return fetchData(`/cartes/${id}/`);
};

const updateCarte = async (id, carte) => {
    boxAlert("Card updated", "green");
    return fetchData(`/cartes/${id}/`, 'PUT', carte);
};

const deleteCarte = async (id,row) => {
    const response = fetchData(`/cartes/${id}/`, 'DELETE');
    if (response) { 
        boxAlert("Chauffeur deleted","green");
        row.remove();
    }
    else boxAlert("Error deleting Chauffeur","red");
};

// Mission functions
const getMissions = async () => {
    return fetchData('/missions/');
};

const createMission = async (mission) => {
    const response = fetchData(`/missions/`, 'POST', mission);
    if (response) {
        boxAlert("Mission added","green");
        window.location.reload();
    }
    else boxAlert("Error addming mission")
};

const getMission = async (id) => {
    return fetchData(`/missions/${id}/`);
};

const updateMission = async (id, mission) => {
    return fetchData(`/missions/${id}/`, 'PUT', mission);
};

const deleteMission = async (id,row) => {
    const response = fetchData(`/missions/${id}/`, 'DELETE');
    if (response) { 
        boxAlert("Mission deleted","green");
        row.remove();
    }
    else boxAlert("Error deleting Mission","red");
};

// Counter function
const getCounter = async () => {
    return fetchData('/counter/');
};
