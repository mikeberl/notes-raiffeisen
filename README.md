# README - Notes Management Webapp

This is a small webapp to create, view, and manage notes. The backend is built with **Spring Boot** and the frontend with **Angular**. Notes are stored in a **PostgreSQL** database, and the app is containerized using **Docker**.

## Technologies Used

- **Backend:**
  - Spring Boot (Java 21)
  - PostgreSQL 17
- **Frontend:**
  - Angular 18
  - Bootstrap v5.2

- **Docker & Docker Compose**

## Available APIs

### 1. Add a Note
- **Endpoint**: `POST /api/notes`
- **Parameters**: `title` (String), `text` (String)
- **Response**:
  - `201 Created`
  - `400 Bad Request`

### 2. Get All Notes
- **Endpoint**: `GET /api/notes`
- **Response**: `200 OK` with a list of notes in JSON.

<!-- ### 3. Get a Single Note
- **Endpoint**: `GET /api/notes/{id}`
- **Description**: Returns a single note by its ID.
- **Parameters**: `id` (Long)
- **Response**: 
  - `200 OK` with the note
  - `404 Not Found` -->

### 4. Update a Note
- **Endpoint**: `PUT /api/notes/{id}`
- **Parameters**: `id` (Long), `title` (String), `text` (String)
- **Response**: 
  - `200 OK`
  - `404 Not Found`
  - `400 Bad Request`

### 5. Delete a Note
- **Endpoint**: `DELETE /api/notes/{id}`
- **Parameters**: `id` (Long)
- **Response**: 
  - `204 No Content`
  - `404 Not Found`

## Running the App

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    ```

2. **Start Docker containers**:
    ```bash
    docker-compose up --build
    ```

3. **Access the app**:
    Open `http://localhost:8080` in your browser.

## Database Configuration

The PostgreSQL database is configured via Docker Compose with the following credentials:
- **Username**: `user`
- **Password**: `password`
- **Database Name**: `notesdb`
