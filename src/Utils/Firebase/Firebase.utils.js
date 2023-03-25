
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider,createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore"
const firebaseConfig = {
	apiKey: "AIzaSyC8704ksWRmlKI60TindmAhHVbM-3x9Ht8",
	authDomain: "e-shop-7c36f.firebaseapp.com",
	projectId: "e-shop-7c36f",
	storageBucket: "e-shop-7c36f.appspot.com",
	messagingSenderId: "500162745979",
	appId: "1:500162745979:web:5effa5d64be5132b5f34de"
};

const firebaseapp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	"prompt": "select_account",
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithgoogleRedirect = () => signInWithRedirect(auth, googleProvider)
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
	const usersDocRef = doc(db, 'users', userAuth.uid);

	const userSnapshort = await getDoc(usersDocRef);

	if (!userSnapshort.exists()) {
		const { displayName, email } = userAuth;
		const created_at = new Date();
		try {
			await setDoc(usersDocRef, {
				displayName,
				email,
				created_at
			})

		} catch (error) {
			console.log('Getting error:' + error);
		}
	}
	return usersDocRef;
};


export const createAuthUserWithEmailAndPassword = async (email,password) => {
	if(!email || !password) return;
	return await createUserWithEmailAndPassword(auth,email,password);

}
