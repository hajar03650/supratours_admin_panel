# ALL FETCH API FUNCTIONS

```javascript
// Base URL for API
const API_BASE_URL = 'http://localhost:8000/api';

// Helper function to make fetch requests
const fetchData = async (url, method = 'GET', body = null, headers = {}) => {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
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
    return fetchData(`/cartes/${id}/`, 'PUT', carte);
};

const deleteCarte = async (id) => {
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

const deleteMission = async (id) => {
    return fetchData(`/missions/${id}/`, 'DELETE');
};

// Counter function
const getCounter = async () => {
    return fetchData('/counter/');
};
```

### Usage

- **Get Chauffeurs**: `getChauffeurs()`
- **Create Chauffeur**: `createChauffeur(chauffeurObject)`
- **Get Chauffeur**: `getChauffeur(id)`
- **Update Chauffeur**: `updateChauffeur(id, chauffeurObject)`
- **Delete Chauffeur**: `deleteChauffeur(id)`
- **Get Autocars**: `getAutocars()`
- **Create Autocar**: `createAutocar(autocarObject)`
- **Get Autocar**: `getAutocar(id)`
- **Update Autocar**: `updateAutocar(id, autocarObject)`
- **Delete Autocar**: `deleteAutocar(id)`
- **Get Cartes**: `getCartes()`
- **Create Carte**: `createCarte(carteObject)`
- **Get Carte**: `getCarte(id)`
- **Update Carte**: `updateCarte(id, carteObject)`
- **Delete Carte**: `deleteCarte(id)`
- **Get Missions**: `getMissions()`
- **Create Mission**: `createMission(missionObject)`
- **Get Mission**: `getMission(id)`
- **Update Mission**: `updateMission(id, missionObject)`
- **Delete Mission**: `deleteMission(id)`
- **Get Counter**: `getCounter()`

You can customize the `API_BASE_URL` if your API is hosted at a different URL.
