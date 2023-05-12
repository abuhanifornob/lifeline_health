// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
<<<<<<< HEAD
  apiKey: process.env.NEXT_PUBLIC_apiKey,
  authDomain:  process.env.NEXT_PUBLIC_authDomain,
  projectId:  process.env.NEXT_PUBLIC_projectId,
  storageBucket:  process.env.NEXT_PUBLIC_storageBucket,
  messagingSenderId:  process.env.NEXT_PUBLIC_messagingSenderId,
  appId:  process.env.NEXT_PUBLIC_appId
=======
  apiKey: "AIzaSyAsN73EXe5Kqt_f_A9u8qruglpagDh0w1Y",
  authDomain: "lifeline-health-rm.firebaseapp.com",
  projectId: "lifeline-health-rm",
  storageBucket: "lifeline-health-rm.appspot.com",
  messagingSenderId: "304319380833",
  appId: "1:304319380833:web:44829e70d9981b75f31920"
>>>>>>> f9b33a168aa7d9c4b4a6684845a4b5bfe7a63524
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default  app ; 