import { useState } from 'react';
import { Link } from "react-router-dom";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../../../Utils/Firebase/Firebase.utils';
import '../Auth.style.scss';
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const Register = () => {

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const handleRegisterSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('passwords do not match');
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth(user, { displayName });
            resetFormFields();
        } catch (error) {
            if(error.code == 'auth/email-already-in-use')
            {
                alert('Cannot create new user, Email already in use');
            }
            console.log(error);
        }
    }
   
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }
    return (
        <div>
            <div className="authContent">
                <div className="authCard">
                    <div className="authContentHeader">
                        <h1>Registration</h1>
                    </div>
                    <form onSubmit={handleRegisterSubmit}>
                        <div className="authContentBody">
                            <div>
                                <label htmlFor="displayName">Name</label>
                                <input type='text' required onChange={handleChange} name='displayName' value={displayName} />

                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type='email' required onChange={handleChange} name='email' value={email} />
                            </div>

                            <div>
                                <label htmlFor="password">Password</label>
                                <input type='password' required onChange={handleChange} name='password' value={password} />
                            </div>
                            <div>
                                <label htmlFor="confirmpassword">Confim Password</label>
                                <input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />
                            </div>
                        </div>
                        <div className="authContentFooter">
                            <button>Submit</button>
                            <div className="mt-3">
                                <p> Already Register ?... <Link to="/login">Login</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Register;
