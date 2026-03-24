# 🏷️ BidXpress - A Premium Auction & Bidding Platform

Welcome to **BidXpress**, a modern, responsive, and intuitive online bidding and auction platform designed to offer a seamless user experience for participating in auctions, browsing products, and managing bids. This is the **Frontend/Client-side** implementation built with React and Vite.

## 🌟 Key Features

*   **Interactive Auction Discovery:** Browse, filter, and search through live and upcoming auction items with ease.
*   **Real-Time Bidding Interface:** Place bids on your favorite products instantly with an intuitive, dynamic interface.
*   **Comprehensive Dashboards:** 
    *   **User Dashboard:** Manage your active bids, view won auctions, track payments, and update your profile seamlessly.
    *   **Admin Dashboard:** Oversee all platform activities, manage users, monitor ongoing auctions, and view overall site analytics.
*   **Secure Payment Processing:** Users can securely process payments for won auctions via an integrated Stripe Checkout flow.
*   **Instant Notifications:** Receive beautiful popup and toast notifications for bid updates, outbid alerts, and auction completions.
*   **Responsive UI:** Fully styled using Tailwind CSS for a seamless, beautifully crafted experience on both desktop and mobile devices.

## 🛠️ Technology Stack

*   **Framework:** React (Vite for lightning-fast builds and HMR)
*   **State Management:** Redux Toolkit (`@reduxjs/toolkit` & `react-redux`)
*   **Routing:** React Router v7
*   **Styling:** Tailwind CSS
*   **Forms & Validation:** React Hook Form
*   **HTTP Client:** Axios
*   **Payments:** Stripe.js (`@stripe/react-stripe-js` & `@stripe/stripe-js`)
*   **Alerts & Notifications:** SweetAlert2 & React Toastify
*   **Icons & UI Elements:** Lucide React, React Icons, React Fast Marquee
*   **Date Formatting:** Moment.js (`moment` & `react-moment`)

## 🚀 Getting Started (Local Setup)

Follow these instructions to run the **BidXpress Client** on your local machine.

### 1. Prerequisites
*   Node.js (v18+ recommended)
*   NPM or Yarn installed

### 2. Installation
Navigate into the client directory and install dependencies:
```bash
cd client
npm install
```

### 3. Environment Variables
Create a `.env` file in the root of the `client` directory and add your necessary environment variables like API base URLs and Stripe Keys:
```env
# API Configuration
VITE_API_BASE_URL=http://localhost:5000/api

# Stripe Public Key for Checkout
VITE_STRIPE_PUBLIC_KEY=pk_test_your_stripe_public_key
```

### 4. API Configuration
Ensure that your Axios instances or API service files are correctly pointing to the backend server URL based on your environment variables.
*   **For Local Development:** `http://localhost:5000`
*   **For Production:** Your deployed server URL (e.g., `https://bidxpress-server.vercel.app`)

### 5. Running the App
Start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`.

## 📦 Deployment Protocol
Before deploying to your hosting provider (like Vercel, Netlify, or Firebase):
1. Update your API base URL to point to the production backend.
2. Build the project using `npm run build` to generate the `dist` folder.
3. Ensure Environment Variables are properly configured in your hosting platform dashboard.
