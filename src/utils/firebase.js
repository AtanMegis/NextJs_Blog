// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: 'nextjs-blog-398403.firebaseapp.com',
    projectId: 'nextjs-blog-398403',
    storageBucket: 'nextjs-blog-398403.appspot.com',
    messagingSenderId: '69887290341',
    appId: '1:69887290341:web:9dccd175e2b68765361d0c',
    measurementId: 'G-H9H217KHLY',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
