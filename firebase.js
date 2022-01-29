import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyBCb4vkDtvA9NeY9KyhpnjA9-ql0PFNjG4",
	authDomain: "instagram-clone-a3667.firebaseapp.com",
	projectId: "instagram-clone-a3667",
	storageBucket: "instagram-clone-a3667.appspot.com",
	messagingSenderId: "677848905905",
	appId: "1:677848905905:web:a2f9375f3ec6dbf7f28a90",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage();

export { db, storage };
