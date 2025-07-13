# 🔗 URL Shortener - MERN Stack

A simple and functional URL Shortener built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js).

### 🧩 Features

- ✅ Shorten long URLs
- 🔍 Retrieve original URLs
- ✏️ Update shortened URLs
- ❌ Delete shortened URLs
- 📊 View access statistics

---

## 📁 Folder Structure

```
url-shortener/
├── backend/       # Node.js + Express + MongoDB
├── frontend/      # React + Axios + Bootstrap 
```

---

## 🚀 Backend Setup (Express + MongoDB)

### 📦 Prerequisites
- Node.js
- MongoDB 

### ⚙️ Setup

```bash
cd backend
npm install
```

### 📄 Add `.env` File

```env
MONGO_URI=mongodb://localhost:27017/urlshortener
PORT=5000
```

### ▶️ Start Backend Server

```bash
npm run dev
```

---

## 🌐 Frontend Setup (React)

### 📦 Prerequisites
- Node.js

### ⚙️ Setup

```bash
cd frontend
npm install
```

### 📄 Add `.env` File

```env
REACT_APP_API_BASE_URL=http://localhost:5000
```

### ▶️ Start Frontend App

```bash
npm start
```

Visit: `http://localhost:3000`

---

## 🔌 API Endpoints

| Method | Endpoint                   | Description           |
|--------|----------------------------|-----------------------|
| POST   | `/api/shorten`             | Create short URL      |
| GET    | `/api/shorten/:code`       | Retrieve original URL |
| PUT    | `/api/shorten/:code`       | Update short URL      |
| DELETE | `/api/shorten/:code`       | Delete short URL      |
| GET    | `/api/shorten/stats/:code` | View usage stats      |

---

## 🧪 Sample POST Body

```json
{
  "url": "https://www.google.com/search?q=mern+stack"
}
```

---

## 🙋‍♂️ Author

**Muhammad Numan** — [GitHub: @Nomimian](https://github.com/Nomimian)

---

## 📄 License

MIT License
