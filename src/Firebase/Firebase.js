import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

try{
const firebaseConfig = {
  apiKey: "AIzaSyBghhcARkklxSWv1ks6JGw7M1nRMQlk9Ko",
  authDomain: "remarkform-3d065.firebaseapp.com",
  databaseURL: "https://remarkform-3d065-default-rtdb.firebaseio.com",
  projectId: "remarkform-3d065",
  storageBucket: "remarkform-3d065.appspot.com",
  messagingSenderId: "782468369081",
  appId: "1:782468369081:web:58e96b1d7b863504186968",
  measurementId: "G-WP6RSG6XP2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
} catch (error) {
console.error('Error initializing Firebase:', error);
}