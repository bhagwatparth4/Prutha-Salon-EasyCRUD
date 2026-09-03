# Prutha Salon 💇‍♀️

A simple customer registration and appointment management app for **Prutha Salon**.

## Features
- Customer registration
- Mobile number and email
- Salon service selection
- Appointment date and time
- Estimated price
- Notes
- Recent customer list
- Delete customer registration
- React + Spring Boot + MariaDB
- Docker Compose support

## Run with Docker

```bash
docker compose up --build
```

Open `http://localhost` in your browser.

### Project structure

- `frontend/` — React + Vite salon interface
- `backend/` — Spring Boot REST API
- MariaDB — customer database
- `compose.yml` — complete local deployment
