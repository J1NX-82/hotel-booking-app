# 🏨 Hotel Booking Website | MERN Stack Full Stack Project

This is a **fully functional Hotel Booking Web App** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). It allows users to browse hotels, view details, book rooms, and make payments online. It also includes an **Admin Dashboard** for hotel management.

> 🔐 Authentication is handled using [Clerk](https://clerk.dev/), and payments are integrated using [Stripe](https://stripe.com/). Email confirmation is sent after successful booking.

## 🔗 Live Demo


## 📸 UI Preview


## ✨ Features

- 🔐 **Clerk Authentication** (Sign In / Sign Up / Profile)
- 🏨 Browse hotels and see full details
- 📅 Book hotel rooms
- 📬 Receive email confirmation after booking
- 💳 Stripe payment gateway integration
- 🛠️ Admin Dashboard (Add/Edit Hotels & View Bookings)
- 🌐 Deployed with Vercel

---

## 🛠️ Tech Stack

| Technology    | Description                  |
|---------------|------------------------------|
| **Frontend**  | React.js, Tailwind CSS       |
| **Backend**   | Node.js, Express.js          |
| **Database**  | MongoDB, Mongoose            |
| **Auth**      | Clerk.dev                    |
| **Payments**  | Stripe                       |
| **Emailing**  | NodeMailer                   |
| **Deployment**| Vercel                       |

---

## 📂 Project Structure

```bash
├── client/             # React frontend
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── ...
├── server/             # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
├── .env
├── package.json
└── README.md
