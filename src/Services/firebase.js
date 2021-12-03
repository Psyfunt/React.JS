import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD5lIJWyjf36DkMaNGhsj96CBKYiE6-f30",
    authDomain: "gb-messanger-66ea9.firebaseapp.com",
    projectId: "gb-messanger-66ea9",
    storageBucket: "gb-messanger-66ea9.appspot.com",
    messagingSenderId: "878768016342",
    appId: "1:878768016342:web:e4a59902ab40bf01b67277",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = async (email, pass) =>
    await createUserWithEmailAndPassword(auth, email, pass);

export const logIn = async (email, pass) =>
    await signInWithEmailAndPassword(auth, email, pass);

export const logOut = async () => await signOut(auth);

export const db = getDatabase(app);
export const userRef = ref(db, 'user');
export const dialogsRef = ref(db, 'dialogs');
export const messagesRef = ref(db, 'messages');
export const profileRef = ref(db, 'profile');
export const getDialogRefById = (id) => ref(db, `dialogs/${id}`);
export const getDialogMsgsListRefById = (dialogId) => ref(db, `messages/${dialogId}/messageList`);
export const getDialogMsgsRefById = (dialogId) => ref(db, `messages/${dialogId}`);