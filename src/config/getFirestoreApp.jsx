import {initializeApp} from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyCJZODTlbheUMaO3aNCr3wRMBZzmvmLL0Q",
    authDomain: "ecommerce-react-ch-895d0.firebaseapp.com",
    projectId: "ecommerce-react-ch-895d0",
    storageBucket: "ecommerce-react-ch-895d0.appspot.com",
    messagingSenderId: "168885630495",
    appId: "1:168885630495:web:230e9835794f2bf505472a",
    measurementId: "G-YSJZEMP81B"
};

const app = initializeApp(firebaseConfig);
export const getFirestoreApp = () => {
    return app
}