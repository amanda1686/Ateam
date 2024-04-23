// Importa las funciones que necesitas del SDK de Firebase
import { initializeApp } from "firebase/app";

// Tu configuración de Firebase con variables de entorno
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ateam-77359.firebaseapp.com",
  projectId: "ateam-77359",
  storageBucket: "ateam-77359.appspot.com",
  messagingSenderId: "1053390640956",
  appId: "1:1053390640956:web:6b3dcd552e78401fae7039"
};

// Inicializa Firebase con la configuración
export const app = initializeApp(firebaseConfig);



