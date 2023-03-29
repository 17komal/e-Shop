import { useEffect ,useState} from "react";
import { Link } from "react-router-dom";
import { getRedirectResult } from "firebase/auth";
import {
    auth,
    signInWithGooglePopup,
    signInWithgoogleRedirect,
    createUserDocFromAuth,
    signInAuthUserWithEmailAndPassword
} from "../../../Utils/Firebase/Firebase.utils";
import { async } from "@firebase/util";
import '../Auth.style.scss';
import Register from "../Register/Register.component";
const defaultFormFields = {
    email: '',
    password: ''
}
const Login = () => {
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password } = formFields;
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }
    useEffect(() => {
        async function fetchData() {
            const res = await getRedirectResult(auth);
            if (res) {
                const userDocRef = await createUserDocFromAuth(res.user);
            }
        }
        fetchData();
    }, []);
    const LoginWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    }
    const handleLoginSubmit = async (event) => {
        event.preventDefault();
       
        try {
           const {user} = await signInAuthUserWithEmailAndPassword(email,password);
           
            resetFormFields();
        } catch (error) 
        {
            console.log(error);
           switch(error.code)
           {
                case 'auth/user-not-found':
                alert('User not found');
                break;

                case 'auth/wrong-password':
                alert('Incorrect Password');
                break;

                default:
                console.log(error);
           }
        }
    }
    return (
        <div className="authContent">
            <div className="authCard">
                <div className="authContentHeader">
                    <h1>Login</h1>
                </div>
                <form onSubmit={handleLoginSubmit}>
                    <div className="authContentBody">
                        <div>
                            <label htmlFor="email">Email Id</label>
                            <input type="email" name="email" id="email" onChange={handleChange}  value={email}/>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" onChange={handleChange} value={password}/>
                        </div>

                    </div>
                    <div className="authContentFooter">
                        <button>Submit</button>
                        <button type='button' onClick={LoginWithGoogle}>Login with Google</button>
                        {/* <button onClick={signInWithgoogleRedirect}> Redirect</button> */}
                    </div>
                    <div className="mt-3">
                        <p> New User ?... <Link to="/register">Register</Link></p>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default Login;