
# **TrackMyBill**

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0.24-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Firebase](https://img.shields.io/badge/Firebase-9.6.10-FFCA28?logo=firebase&logoColor=white)](https://firebase.google.com/)
[![Razorpay](https://img.shields.io/badge/Payment%20Gateway-Razorpay-0071C5?logo=razorpay&logoColor=white)](https://razorpay.com/)

Welcome to **TrackMyBill**! This project, developed by **Ocean-Optimizers_025**, is designed to simplify bill tracking, invoice generation, and management. With a clean interface, secure payment gateway, and efficient features, managing your bills has never been easier!

**Live Demo**:  
🔗 **[Click Here to Try TrackMyBill](https://aquamarine-dusk-441807.netlify.app/)**

## **Core Features**

- **User Authentication**: Sign in securely with Google using **Firebase**.
- **Bill Management**: Create, edit, and delete invoices.
- **PDF Generation**: Download invoices as PDFs with one click.
- **Payment Gateway**: Seamless payments through **Razorpay**.
- **Responsive Design**: Built with **Tailwind CSS**, optimized for all devices.
- **Smooth Animations**: Integrated with **Framer Motion** for transitions.
- **Chatbot Integration**: Get instant assistance with invoice management and payments.

## **Project Structure**

The project is designed to ensure clarity, modularity, and scalability. Here’s how the main folders are organized:

```bash
TrackMyBill
├── public             # Static assets for the application
├── src/               # Main source code
│   ├── assets/        # General images, icons, and other media
│   ├── components/    # Reusable React components
│   │   └── LandingPage/  # Components related to the landing page
│   │       ├── Invoices/  # Invoice components
│   │       └── other components/  # Miscellaneous components
│   ├── Authentication/  # Authentication-related components
│   │   ├── css/        # Styles for authentication
│   │   ├── images/     # Authentication-related images
│   │   ├── Login.jsx   # Login functionality
│   │   ├── Register.jsx  # User registration functionality
│   │   ├── firebase.jsx  # Firebase authentication setup
│   │   └── SignInWithGoogle.jsx  # Google sign-in component
│   ├── LandingPage/     # Separate folder for landing page structure
│   │   ├── Landing Page components/  # Components specific to the landing page
│   │   ├── Landing page assets/      # Images, icons, etc., specific to the landing page
│   │   └── Landing page constants/   # Constant variables for the landing page
│   ├── other components/  # Other reusable components
│   ├── App.jsx        # Main app component
│   ├── index.js       # App entry point
│   ├── App.css        # Global styles
│   ├── index.css      # Entry point styles
│   └── main.jsx       # Main entry point
└── other dependencies files  # Configuration, libraries, etc.
```

## **Key Components Breakdown**

- **Landing Page**: Includes components like `Hero`, `Footer`, `CTA`, and `ContactUs` to create a compelling landing experience.
- **Invoice Module**: The `InvoiceForm`, `InvoiceItem`, and `InvoiceModal` components handle all invoice-related actions, including creation, editing, and deletion.
- **User Authentication**: Firebase handles Google login functionality in the `firebase.js` file, allowing for easy and secure user authentication.

## **Tech Stack**

- **Frontend**: Built with **React.js** for modular, reusable components.
- **CSS Framework**: Styled using **Tailwind CSS** for a responsive, modern UI.
- **Authentication**: Secure Google sign-in through **Firebase**.
- **Payment Gateway**: Integrated **Razorpay** for secure and efficient payments.
- **Animations**: Implemented **Framer Motion** for smooth and fluid UI animations.
- **PDF Generation**: Built-in functionality for converting invoices into downloadable PDFs.

## **How to Get Started**

1. **Clone the repo**:
   ```bash
   git clone https://github.com/Sumitsahani/Ocean-Optimizers_025.git
   ```
2. **Navigate to the project**:
   ```bash
   cd TrackMyBill
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```

## **Team**

This project was created by **Ocean-Optimizers_025**:

- **Sumit Kumar Sahani** (Team Lead) 
- **Ashita Shahu** 
- **Rohan Singh** 
- **Himanshu** 
---

With **TrackMyBill**, managing your invoices and payments becomes easier and more efficient! 

below there is refrence image of project:
![image](https://github.com/user-attachments/assets/46a6f3dc-1e71-4474-be0f-0c60008e86a8)

