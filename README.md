# Just Do It

A simple web application that allowing users to Perform CRUD based functionality like reading notes, adding notes, deleting notes and updating notes. Supports user Authentication and 
A database through fireship. 
  
# Technologies Used

  Frontend: React.js
  Database: Firebase

# Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.
Prerequisites

Before you begin, ensure you have the following installed:

  Node.js: Download & Install Node.js (includes npm)
  Git: Download & Install Git
Installation

    git clone https://github.com/zekariyasamdu/just-do-It.git
    cd app

#  Install frontend dependencies:
Bash

     npm install

# Firebase Setup

To connect the application to your Firebase project, you'll need to set up your Firebase configuration.

reate a Firebase Project: If you don't already have one, go to the Firebase Console and create a new project.

Register Your App: Within your Firebase project, register a web app and copy your Firebase configuration object. It will look something like this:
JavaScript

         const firebaseConfig = {
          apiKey: "YOUR_API_KEY",
          authDomain: "YOUR_AUTH_DOMAIN",
          projectId: "YOUR_PROJECT_ID",
          storageBucket: "YOUR_STORAGE_BUCKET",
          messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
          appId: "YOUR_APP_ID"
          measurementId: "YOUR_MEASUREMENT_ID"
          };

Configure Environment Variables:
Create a .env file in the root of your project and add your Firebase configuration details, replacing the placeholder values with your actual configuration:

     VITE_APP_FIREBASE_API_KEY=YOUR_API_KEY
     VITE_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
     VITE_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
     VITE_APP_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
     VITE_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
     VITE_APP_FIREBASE_APP_ID=YOUR_APP_ID
     VITE_APP_FIREBASE_MEASUREMENT_ID=YOUR_MEASUREMENT_ID
     

Initialize Firebase in your application: In your React application, typically in a file like src/firebase.js or src/utils/firebase.js, initialize Firebase using these environment variables.
JavaScript


    // src/config/firebase.js (example)
    import { initializeApp } from "firebase/app";
    import { getAuth } from "firebase/auth";
    import { getFirestore } from "firebase/firestore";
    import { collection } from "firebase/firestore";

    const firebaseConfig = {
    apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app)
    const noteCollections = collection(db, "users")

    export {auth , noteCollections, db}

Enable Firestore and Authentication: In your Firebase Console, ensure that Firestore Database is enabled and the desired authentication methods (Email/Password) are enabled under    the "Authentication" section.

#   Running the Application

After completing the Firebase setup and installing dependencies:
Bash

    npm run dev




![image alt](https://github.com/zekariyasamdu/just-do-It/blob/cc1c2093443371ff5b6ca8e7ce196b565c1143c9/src/assets/photo_2025-05-16_20-58-32.jpg)
![image alt](https://github.com/zekariyasamdu/just-do-It/blob/cc1c2093443371ff5b6ca8e7ce196b565c1143c9/src/assets/photo_2025-05-16_20-58-33.jpg)
![image alt](https://github.com/zekariyasamdu/just-do-It/blob/cc1c2093443371ff5b6ca8e7ce196b565c1143c9/src/assets/photo_2025-05-16_20-59-59.jpg)
