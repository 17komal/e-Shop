import { useState } from 'react';
import { createAuthUserWithEmailAndPassword } from '../../../Utils/Firebase/Firebase.utils';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const Register = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();

    }
    const [fromFields, setFromFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = fromFields;
    const handleChange = (event) => {
        const { name, value } = event.taget;
        setFromFields({ ...fromFields, name: value });
    }
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={() => { }}>

                <label>Name</label>
                <input type='text' required onChange={handleChange} name='displayName' value={displayName} />

                <label>Email</label>
                <input type='email' required onChange={handleChange} name='email' value={email} />

                <label>Password</label>
                <input type='password' required onChange={handleChange} name='password' value={password} />

                <label>Confim Password</label>
                <input type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
};

export default Register;
