
# Auto Company API Endpoints

This guide provides details on the API endpoints for managing chauffeurs, autocars, missions, and cartes in the Auto Company application. The endpoints use Django REST Framework and are secured with JWT authentication.

## Authentication

### Login

**URL:** `/api/login/`
**Method:** `POST`
**Description:** Authenticates a user and returns a JWT token.

**Request Body:**

```json
{
  "username": "string",
  "password": "string"
}
```

**Response:**

```json
{
  "access": "string",
  "refresh": "string"
}
```

## Chauffeur

### List Chauffeurs

**URL:** `/api/chauffeurs/`
**Method:** `GET`
**Description:** Retrieves a list of all chauffeurs.

**Response:**

```json
[
  {
    "id": 1,
    "nom": "string",
    "prenom": "string",
    "permis_conduire": "string"
  },
  ...
]
```

### Create Chauffeur

**URL:** `/api/chauffeurs/`
**Method:** `POST`
**Description:** Creates a new chauffeur.

**Request Body:**

```json
{
  "nom": "string",
  "prenom": "string",
  "permis_conduire": "string"
}
```

**Response:**

```json
{
  "id": 1,
  "nom": "string",
  "prenom": "string",
  "permis_conduire": "string"
}
```

### Retrieve Chauffeur

**URL:** `/api/chauffeurs/{id}/`
**Method:** `GET`
**Description:** Retrieves details of a specific chauffeur.

**Response:**

```json
{
  "id": 1,
  "nom": "string",
  "prenom": "string",
  "permis_conduire": "string"
}
```

### Update Chauffeur

**URL:** `/api/chauffeurs/{id}/`
**Method:** `PUT`
**Description:** Updates a specific chauffeur.

**Request Body:**

```json
{
  "nom": "string",
  "prenom": "string",
  "permis_conduire": "string"
}
```

**Response:**

```json
{
  "id": 1,
  "nom": "string",
  "prenom": "string",
  "permis_conduire": "string"
}
```

### Delete Chauffeur

**URL:** `/api/chauffeurs/{id}/`
**Method:** `DELETE`
**Description:** Deletes a specific chauffeur.

**Response:**

```json
{
  "detail": "Chauffeur deleted."
}
```

## Autocar

### List Autocars

**URL:** `/api/autocars/`
**Method:** `GET`
**Description:** Retrieves a list of all autocars.

**Response:**

```json
[
  {
    "id": 1,
    "immatriculation": "string",
    "marque": "string",
    "modele": "string",
    "capacite": 50
  },
  ...
]
```

### Create Autocar

**URL:** `/api/autocars/`
**Method:** `POST`
**Description:** Creates a new autocar.

**Request Body:**

```json
{
  "immatriculation": "string",
  "marque": "string",
  "modele": "string",
  "capacite": 50
}
```

**Response:**

```json
{
  "id": 1,
  "immatriculation": "string",
  "marque": "string",
  "modele": "string",
  "capacite": 50
}
```

### Retrieve Autocar

**URL:** `/api/autocars/{id}/`
**Method:** `GET`
**Description:** Retrieves details of a specific autocar.

**Response:**

```json
{
  "id": 1,
  "immatriculation": "string",
  "marque": "string",
  "modele": "string",
  "capacite": 50
}
```

### Update Autocar

**URL:** `/api/autocars/{id}/`
**Method:** `PUT`
**Description:** Updates a specific autocar.

**Request Body:**

```json
{
  "immatriculation": "string",
  "marque": "string",
  "modele": "string",
  "capacite": 50
}
```

**Response:**

```json
{
  "id": 1,
  "immatriculation": "string",
  "marque": "string",
  "modele": "string",
  "capacite": 50
}
```

### Delete Autocar

**URL:** `/api/autocars/{id}/`
**Method:** `DELETE`
**Description:** Deletes a specific autocar.

**Response:**

```json
{
  "detail": "Autocar deleted."
}
```

## Carte

### List Cartes

**URL:** `/api/cartes/`
**Method:** `GET`
**Description:** Retrieves a list of all cartes.

**Response:**

```json
[
  {
    "id": 1,
    "numero": "string",
    "solde": 100.00
  },
  ...
]
```

### Create Carte

**URL:** `/api/cartes/`
**Method:** `POST`
**Description:** Creates a new carte.

**Request Body:**

```json
{
  "numero": "string",
  "solde": 100.00
}
```

**Response:**

```json
{
  "id": 1,
  "numero": "string",
  "solde": 100.00
}
```

### Retrieve Carte

**URL:** `/api/cartes/{id}/`
**Method:** `GET`
**Description:** Retrieves details of a specific carte.

**Response:**

```json
{
  "id": 1,
  "numero": "string",
  "solde": 100.00
}
```

### Update Carte

**URL:** `/api/cartes/{id}/`
**Method:** `PUT`
**Description:** Updates a specific carte.

**Request Body:**

```json
{
  "numero": "string",
  "solde": 100.00
}
```

**Response:**

```json
{
  "id": 1,
  "numero": "string",
  "solde": 100.00
}
```

### Delete Carte

**URL:** `/api/cartes/{id}/`
**Method:** `DELETE`
**Description:** Deletes a specific carte.

**Response:**

```json
{
  "detail": "Carte deleted."
}
```

## Mission

### List Missions

**URL:** `/api/missions/`
**Method:** `GET`
**Description:** Retrieves a list of all missions.

**Response:**

```json
[
  {
    "id": 1,
    "chauffeur": 1,
    "autocar": 1,
    "ville_depart": "string",
    "ville_arrivee": "string",
    "date_depart": "2023-01-01T00:00:00Z",
    "date_arrivee": "2023-01-01T00:00:00Z",
    "carte": 1
  },
  ...
]
```

### Create Mission

**URL:** `/api/missions/`
**Method:** `POST`
**Description:** Creates a new mission.

**Request Body:**

```json
{
  "chauffeur": 1,
  "autocar": 1,
  "ville_depart": "string",
  "ville_arrivee": "string",
  "date_depart": "2023-01-01T00:00:00Z",
  "date_arrivee": "2023-01-01T00:00:00Z",
  "carte": 1
}
```

**Response:**

```json
{
  "id": 1,
  "chauffeur": 1,
  "autocar": 1,
  "ville_depart": "string",
  "ville_arrivee": "string",
  "date_depart": "2023-01-01T00:00:00Z",
  "date_arrivee": "2023-01-01T00:00:00Z",
  "carte": 1
}
```

### Retrieve Mission

**URL:** `/api/missions/{id}/`
**Method:** `GET`
**Description:** Retrieves details of a specific mission.

**Response:**

```json
{
  "id": 1,
  "chauffeur": 1,
  "autocar": 1,
  "ville_depart": "string",
  "ville_arrivee": "string",
  "date_depart": "2023-01-01T00:00:00Z",
  "date_arrivee": "2023-01-01T00:00:00Z",
  "carte": 1
}
```

### Update Mission

**URL:** `/api/missions/{id}/`
**Method:** `PUT`
**Description:** Updates a specific mission.

**Request Body:**

```json
{
  "chauffeur": 1,
  "autocar": 1,
  "ville_depart": "string",
  "ville_arrivee":

 "string",
  "date_depart": "2023-01-01T00:00:00Z",
  "date_arrivee": "2023-01-01T00:00:00Z",
  "carte": 1
}
```

**Response:**

```json
{
  "id": 1,
  "chauffeur": 1,
  "autocar": 1,
  "ville_depart": "string",
  "ville_arrivee": "string",
  "date_depart": "2023-01-01T00:00:00Z",
  "date_arrivee": "2023-01-01T00:00:00Z",
  "carte": 1
}
```

### Delete Mission

**URL:** `/api/missions/{id}/`
**Method:** `DELETE`
**Description:** Deletes a specific mission.

**Response:**

```json
{
  "detail": "Mission deleted."
}
```

## Counter

### Retrieve Counter

**URL:** `/api/counter/`
**Method:** `GET`
**Description:** Retrieves the counts of chauffeurs, autocars, cartes, and missions.

**Response:**

```json
{
  "chauffeur_count": 10,
  "autocar_count": 5,
  "carte_count": 15,
  "mission_count": 20
}
```

---

## Setup CORS

To enable CORS in your Django application, add the following to your `settings.py`:

```python
INSTALLED_APPS = [
    # ...
    'corsheaders',
    # ...
]

MIDDLEWARE = [
    # ...
    'corsheaders.middleware.CorsMiddleware',
    # ...
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # Add your frontend URL here
]
```

## JWT Authentication

Install the required packages:

```bash
pip install djangorestframework-simplejwt
```

Add the following to your `settings.py`:

```python
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}

from datetime import timedelta

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60),
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
    'ROTATE_REFRESH_TOKENS': True,
    'BLACKLIST_AFTER_ROTATION': True,
    'UPDATE_LAST_LOGIN': False,
}
```

In your `urls.py`:

```python
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('api/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
```

---
