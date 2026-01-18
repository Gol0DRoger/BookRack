# BookRack: Full-Stack Books Management System

**A modern, containerized MERN application for seamless library management.**

[![Project Status](https://img.shields.io/badge/Status-Active-brightgreen)](https://github.com/your-username/BookRack)
[![Docker Support](https://img.shields.io/badge/Docker-Supported-blue)](https://www.docker.com/)

---

## Project Demo

> ## Watch the walkthrough of the BookRack:
https://github.com/user-attachments/assets/4478d0d0-eb55-4087-8d08-79cb2ad88bde

> ## Screenshots:
<img width="1845" height="932" alt="Screenshot 2026-01-18 180352" src="https://github.com/user-attachments/assets/ab2f9b70-cf91-4890-9f6f-43b845642314" />
<img width="1843" height="926" alt="Screenshot 2026-01-18 200433" src="https://github.com/user-attachments/assets/83d47acf-bfa6-4bc3-a8fc-751a9e7590eb" />
<img width="1410" height="1008" alt="Screenshot 2026-01-18 174813" src="https://github.com/user-attachments/assets/5626d97c-6b89-4961-92a7-2d9823601231" />

---

### **Core Features**
* **Full CRUD Operations:** Create, Read, Update, and Delete books with ease.
* **Persistent Storage:** Data is stored securely in **MongoDB Atlas**.
* **Modern UI:** A responsive, minimalist interface built with **React** and **Tailwind CSS**.
* **Containerized Architecture:** Fully Dockerized for "one-command" local setup.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React.js, Vite, Tailwind CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **DevOps** | Docker, Docker Compose |

---

## 📦 Run it Locally

### **Option 1: Quick Run (Docker Recommended)**
If you have Docker installed, you don't need to install Node or Mongo.
```Terminal / CMD

docker compose -f docker-compose.prod.yml up

Access the app at http://localhost:5173

```
---

### Manual Installation (For Modification)
If you want to modify the source code:

Clone the Repo:

git clone [https://github.com/your-username/BookRack.git](https://github.com/your-username/BookRack.git)
cd BookRack
Backend Setup:

cd backend && npm install

Create a config.js and add your PORT and MONGO_URI.

```
Run: npm start
```
Frontend Setup:

cd frontend && npm install
```
Run: npm run dev
```
## Container Registry
The official images for **BookRack** are hosted on Docker Hub. You can pull the latest versions directly:

* **Backend:** `docker pull rishabh106/bookstore-backend:v1`
* **Frontend:** `docker pull rishabh106/bookstore-frontend:v1`

🔗 **View my full Docker Hub Profile:** [hub.docker.com/u/rishabh106](https://hub.docker.com/u/rishabh106?_gl=1*6tywgw*_gcl_au*NjM5MDUwNTQwLjE3Njc2MDkwODA.*_ga*NTc2MjIzOTc1LjE3Njc2MDkwODA.*_ga_XJWPQMJYHQ*czE3Njg3MzAyMjQkbzckZzEkdDE3Njg3MzE2NjQkajYwJGwwJGgw)

## Upcoming Features
BookRack is under active development. The following features are currently being implemented:

* **[In Progress] Robust User Authentication:** Integrating **JWT (JSON Web Tokens)** for secure user login, registration, and protected routes.
* **Search & Filter:** Advanced querying to find books by title, author, or genre.
