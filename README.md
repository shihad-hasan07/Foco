# FoCo - Community Food Sharing Platform

## Purpose

FoCo is a Community Food Sharing and Surplus Reduction Platform designed to reduce food waste and connect donors with people in need. Users can share surplus food, request available food items, and manage their donations and requests with ease. The platform is built to be user-friendly, secure, and visually appealing while addressing a significant social cause.

---

## Live URL

[FoCo Live Site](https://foody-cart-6c36f.web.app/)

---

## Key Features

### Core Features

- **Authentication**
  - Email/password-based login and registration.
  - Social login with Google.
  - Password validation with error handling.
- **Food Management**
  - Add, update, and delete food items with status tracking.
  - View available food items, filter by expiration date, and search by name.
  - Request food and track requests.
- **Responsive Design**
  - Fully optimized for mobile, tablet, and desktop devices.

### Security

- Firebase configuration keys secured via environment variables.
- MongoDB credentials secured with environment variables.
- JWT-based authentication for private routes.

### Pages and Functionalities

1. **Homepage**
   - Beautiful banner/slider.
   - Featured Foods section (top 6 items).
   - Additional sections for user engagement.
2. **Available Foods**
   - View all available foods with sorting and search functionality.
   - Toggle layout between 2-column and 3-column views.
3. **Add Food (Private)**
   - Form to add food details including image, quantity, and expiration.
4. **Single Food Details**
   - View detailed food information.
   - Request food directly from this page.
5. **Manage My Foods (Private)**
   - View, update, and delete foods added by the user.
6. **My Food Requests (Private)**
   - Track all requests made by the user.

---

## Technologies and Packages Used

### Frontend

- **React**: For building the user interface.
- **React Router**: For managing routes and navigation.
- **Tailwind CSS**: For responsive and modern styling.

### Backend

- **Node.js**: Backend runtime environment.
- **Express.js**: For creating API routes.
- **MongoDB**: Database for storing application data.
- **Firebase**: Authentication and deployment.

### Additional Libraries

- **Axios**: For API requests.
- **Toastify**: For notifications.
- **Dotenv**: For managing environment variables.
- **JWT (jsonwebtoken)**: For token-based authentication.
