const authentication= firebase.authentication();
const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const provider = new firebase.authentication.EmailAuthProvider();

signInBtn.onclick = () => authentication.SignInWithPopup(provider);

signOutBtn.onclick = () => authentication.signOut();