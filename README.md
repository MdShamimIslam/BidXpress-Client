# BidXpress - Client

Welcome to the frontend application of **BidXpress**, a modern, responsive, and intuitive online bidding and auction platform. This client-side application is built with React and Vite, offering a seamless user experience for participating in auctions, browsing products, and managing bids.

## 🚀 Technologies Used

The client is powered by a robust stack of modern web technologies:

- **Core Framework**: [React 18](https://reactjs.org/) powered by [Vite](https://vitejs.dev/) for lightning-fast builds and HMR.
- **State Management**: [@reduxjs/toolkit](https://redux-toolkit.js.org/) & `react-redux` for predictable and efficient global state management.
- **Routing**: [React Router v7](https://reactrouter.com/) for dynamic client-side routing.
- **Styling & UI**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling, along with custom components.
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) for performant, flexible, and extensible forms.
- **API Communication**: [Axios](https://axios-http.com/) for making HTTP requests to the backend server.
- **Payments**: [@stripe/react-stripe-js](https://stripe.com/docs/stripe-js/react) for secure payment processing integrations.
- **Notifications & Alerts**: [SweetAlert2](https://sweetalert2.github.io/) and [React Toastify](https://fkhadra.github.io/react-toastify/) for beautiful, responsive popups and toast notifications.
- **Icons**: `lucide-react` and `react-icons` for scalable vector icons.
- **Date & Time Formatting**: `moment` and `react-moment`.

## 📁 Project Structure

- `src/`: Contains all the source code for the React application.
  - `components/`: Reusable UI components.
  - `pages/`: Main page-level components corresponding to routes.
  - `store/` or `redux/`: Redux slices and store configuration.
  - `assets/`: Static assets like images and global styles.

## 🛠️ Getting Started

### Prerequisites
Make sure you have Node.js and npm (or yarn/pnpm) installed on your machine.

### Installation & Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```
2. **Environment Variables**:
   Create a `.env` file in the root of the `client` directory and configure the required environment variables (e.g., API base URL, Stripe publishable key).

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173` (or the port specified by Vite).

## 📦 Build for Production

To create an optimized production build, run:
```bash
npm run build
```
This will generate a `dist` folder containing the compiled static files, ready to be deployed to any static hosting service.

## 🛡️ Linting

To analyze the code for potential errors, run:
```bash
npm run lint
```
