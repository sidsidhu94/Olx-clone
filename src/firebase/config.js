import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

// const firebaseConfig = {
//     apiKey: "AIzaSyAzQyqH4oi33numXjJBTJuCLYeF90gw-iI", 
//     authDomain: "olx-clone-78ff0.firebaseapp.com",
//     projectId: "olx-clone-78ff0",
//     storageBucket: "olx-clone-78ff0.appspot.com",
//     messagingSenderId: "444580784497",
//     appId: "1:444580784497:web:b3d56d2de5cd02482f2ed0"
//   };


const firebaseConfig = {
  apiKey: "AIzaSyC6GpSBDaz-SyP56e891OUTj-C9FRJhw3Y",
  authDomain: "olxclone-8e661.firebaseapp.com",
  projectId: "olxclone-8e661",
  storageBucket: "olxclone-8e661.appspot.com",
  messagingSenderId: "69761203830",
  appId: "1:69761203830:web:2f3930e14d52a38b04a957",
  measurementId: "G-140JLJFLQ1"
};


export default firebase.initializeApp(firebaseConfig)