import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDw6941gIgdpcXUAR6fJm36cS6TMhA6UYo",
  authDomain: "chat-saas-app-project.firebaseapp.com",
  projectId: "chat-saas-app-project",
  storageBucket: "chat-saas-app-project.appspot.com",
  messagingSenderId: "216889145004",
  appId: "1:216889145004:web:00c56ce944a4390e53d109",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
