# API Endpoints

1. **User Registration**

   - **URL:** `/api/register/`
   - **Method:** `POST`

   **Request JSON:**

   ```json
   {
     "username": "agent_username",
     "email": "agent@example.com",
     "password": "password123"
   }
   ```

   **Response JSON:**

   ```json
   {
     "user": {
       "username": "agent_username",
       "email": "agent@example.com"
     }
   }
   ```
2. **User Login**

   - **URL:** `/api/login/`
   - **Method:** `POST`

   **Request JSON:**

   ```json
   {
     "username": "agent_username",
     "password": "password123"
   }
   ```

   **Response JSON:**

   ```json
   {
     "refresh": "refresh_token",
     "access": "access_token"
   }
   ```
3. **Token Refresh**

   - **URL:** `/api/token/refresh/`
   - **Method:** `POST`

   **Request JSON:**

   ```json
   {
     "refresh": "refresh_token"
   }
   ```

   **Response JSON:**

   ```json
   {
     "access": "new_access_token"
   }
   ```
4. **Get Profile**

   - **URL:** `/api/profile/`
   - **Method:** `GET`
   - **Headers:** `Authorization: Bearer <access_token>`

   **Response JSON:**

   ```json
   {
     "user": {
       "id": 1,
       "username": "agent_username",
       "email": "agent@example.com"
     },
     "bio": "Agent bio",
     "location": "Agent location"
   }
   ```
5. **Update Profile**

   - **URL:** `/api/profile/`
   - **Method:** `PUT`
   - **Headers:** `Authorization: Bearer <access_token>`

   **Request JSON:**

   ```json
   {
     "bio": "Updated bio",
     "location": "Updated location"
   }
   ```

   **Response JSON:**

   ```json
   {
     "user": {
       "id": 1,
       "username": "agent_username",
       "email": "agent@example.com"
     },
     "bio": "Updated bio",
     "location": "Updated location"
   }
   ```
6. **List/Create Autocar**

   - **URL:** `/api/autocars/`
   - **Method:** `GET` (List) / `POST` (Create)

   **Request JSON (POST):**

   ```json
   {
     "name": "Bus A",
     "license_plate": "ABC123",
     "capacity": 50
   }
   ```

   **Response JSON (POST):**

   ```json
   {
     "id": 1,
     "name": "Bus A",
     "license_plate": "ABC123",
     "capacity": 50
   }
   ```
7. **Retrieve/Update/Delete Autocar**

   - **URL:** `/api/autocars/<id>/`
   - **Method:** `GET` (Retrieve) / `PUT` (Update) / `DELETE` (Delete)

   **Request JSON (PUT):**

   ```json
   {
     "name": "Updated Bus A",
     "license_plate": "XYZ789",
     "capacity": 55
   }
   ```

   **Response JSON (PUT):**

   ```json
   {
     "id": 1,
     "name": "Updated Bus A",
     "license_plate": "XYZ789",
     "capacity": 55
   }
   ```
8. **List/Create Carte**

   - **URL:** `/api/cartes/`
   - **Method:** `GET` (List) / `POST` (Create)

   **Request JSON (POST):**

   ```json
   {
     "name": "Carte A",
     "card_number": "123456789",
     "balance": 100.00
   }
   ```

   **Response JSON (POST):**

   ```json
   {
     "id": 1,
     "name": "Carte A",
     "card_number": "123456789",
     "balance": 100.00
   }
   ```
9. **Retrieve/Update/Delete Carte**

   - **URL:** `/api/cartes/<id>/`
   - **Method:** `GET` (Retrieve) / `PUT` (Update) / `DELETE` (Delete)

   **Request JSON (PUT):**

   ```json
   {
     "name": "Updated Carte A",
     "card_number": "987654321",
     "balance": 150.00
   }
   ```

   **Response JSON (PUT):**

   ```json
   {
     "id": 1,
     "name": "Updated Carte A",
     "card_number": "987654321",
     "balance": 150.00
   }
   ```
10. **List/Create Mission**

    - **URL:** `/api/missions/`
    - **Method:** `GET` (List) / `POST` (Create)

    **Request JSON (POST):**

    ```json
    {
      "driver": "agent_username",
      "autocar": "Bus A",
      "destination": "City Center",
      "departure_time": "2024-07-24T10:00:00Z",
      "arrival_time": "2024-07-24T12:00:00Z",
      "card": "Carte A"
    }
    ```

    **Response JSON (POST):**

    ```json
    {
      "id": 1,
      "driver": "agent_username",
      "autocar": "Bus A",
      "destination": "City Center",
      "departure_time": "2024-07-24T10:00:00Z",
      "arrival_time": "2024-07-24T12:00:00Z",
      "card": "Carte A"
    }
    ```
11. **Retrieve/Update/Delete Mission**

    - **URL:** `/api/missions/<id>/`
    - **Method:** `GET` (Retrieve) / `PUT` (Update) / `DELETE` (Delete)

    **Request JSON (PUT):**

    ```json
    {
      "driver": "agent_username",
      "autocar": "Updated Bus A",
      "destination": "New Destination",
      "departure_time": "2024-07-25T10:00:00Z",
      "arrival_time": "2024-07-25T12:00:00Z",
      "card": "Updated Carte A"
    }
    ```

    **Response JSON (PUT):**

    ```json
    {
      "id": 1,
      "driver": "agent_username",
      "autocar": "Updated Bus A",
      "destination": "New Destination",
      "departure_time": "2024-07-25T10:00:00Z",
      "arrival_time": "2024-07-25T12:00:00Z",
      "card": "Updated Carte A"
    }
    ```

### Summary

This includes the essential API endpoints and JSON payloads for user management, profile handling, and CRUD operations for `Autocar`, `Carte`, and `Mission`. Use these details to integrate your frontend with your Django backend.

If you have any additional questions or need further adjustments, let me know!
