import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth,signInWithGooglePopup, signInWithgoogleRedirect, createUserDocFromAuth } from "../../../Utils/Firebase/Firebase.utils";
import { async } from "@firebase/util";


const Login = () => {
  
    useEffect(() => {
        async function fetchData() {
            const res = await getRedirectResult(auth);
           if(res)
           {
            const userDocRef = await createUserDocFromAuth(res.user);
           }
        }
        fetchData();
      }, []);
    const LoginWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    }
    return (
        <>
            <h1>Login Page</h1>
            <button onClick={LoginWithGoogle}>Login</button>
            <button onClick={signInWithgoogleRedirect}>Login with Redirect</button>
        </>
    );
};

export default Login;