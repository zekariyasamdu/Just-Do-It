// firebase
import { getAuth } from "firebase/auth"
import { db } from "../config/firebase"
import { doc, collection } from "firebase/firestore";


function removeDefault(e) {
    e.preventDefault();
}

function getCurrentUser() {
    const currentUserId = getAuth().currentUser.uid;
    return currentUserId;
}

function getCurrentUserEmail(){
    const currentUserEmail = getAuth().currentUser.email;
    return currentUserEmail;
}

function getNoteReferance(id) {

    const noteRef = doc(db, 'users', getCurrentUser(), "notes", `${id}`);
    return noteRef;
}

function getCurrenCollection() {
    const currentUserCollection = collection(db, "users", getCurrentUser(), "notes");
    return currentUserCollection;
}


export { removeDefault, getCurrentUser, getCurrenCollection, getNoteReferance, getCurrentUserEmail }