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
    const blocking = document.createElement("div")
    blocking.className = "blocking";
    document.body.insertBefore(blocking,document.body.firstChild);
    setTimeout(() => {
        window.location.href = "/login";
    }, 3000);
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
    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || 'Something went wrong');
    }
    return response.json();
};

// Chauffeur functions
const getChauffeurs = async () => {
    return fetchData('/chauffeurs/');
};

const createChauffeur = async (chauffeur) => {
    return fetchData('/chauffeurs/', 'POST', chauffeur);
};

const getChauffeur = async (id) => {
    return fetchData(`/chauffeurs/${id}/`);
};

const updateChauffeur = async (id, chauffeur) => {
    return fetchData(`/chauffeurs/${id}/`, 'PUT', chauffeur);
};

const deleteChauffeur = async (id) => {
    return fetchData(`/chauffeurs/${id}/`, 'DELETE');
};

// Autocar functions
const getAutocars = async () => {
    return fetchData('/autocars/');
};

const createAutocar = async (autocar) => {
    return fetchData('/autocars/', 'POST', autocar);
};

const getAutocar = async (id) => {
    return fetchData(`/autocars/${id}/`);
};

const updateAutocar = async (id, autocar) => {
    return fetchData(`/autocars/${id}/`, 'PUT', autocar);
};

const deleteAutocar = async (id) => {
    return fetchData(`/autocars/${id}/`, 'DELETE');
};

// Carte functions
const getCartes = async () => {
    return fetchData('/cartes/');
};

const createCarte = async (carte) => {
    return fetchData('/cartes/', 'POST', carte);
};

const getCarte = async (id) => {
    return fetchData(`/cartes/${id}/`);
};

const updateCarte = async (id, carte) => {
    boxAlert("Card updated", "green");
    return fetchData(`/cartes/${id}/`, 'PUT', carte);
};

const deleteCarte = async (id,row) => {
    return fetchData(`/cartes/${id}/`, 'DELETE');
};

// Mission functions
const getMissions = async () => {
    return fetchData('/missions/');
};

const createMission = async (mission) => {
    return fetchData('/missions/', 'POST', mission);
};

const getMission = async (id) => {
    return fetchData(`/missions/${id}/`);
};

const updateMission = async (id, mission) => {
    return fetchData(`/missions/${id}/`, 'PUT', mission);
};

const deleteMission = async (id,row) => {
    return fetchData(`/missions/${id}/`, 'DELETE');
};

// Counter function
const getCounter = async () => {
    return fetchData('/counter/');
};
