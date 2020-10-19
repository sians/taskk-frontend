import React, { useState, useEffect } from 'react';

import useStorage from '../../hooks/useStorage';
import useAuth from '../../hooks/useAuth';

import TextInput from "../../components/TextInput";
import Button from '../../components/Button';


const Login = () => {
    const { user } = useStorage();
    const [email, setEmail] = useState(user?.data?.attributes?.email);
    const [password, setPassword] = useState('');

    const {
        signInAndRedirectToDashboard,
        error,
        redirectToDashboard
    } = useAuth();

    useEffect(() => {
        if (user) {
            redirectToDashboard();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmitLogin = () => {
        signInAndRedirectToDashboard(email, password)
    }

    return (
        <div>
            <p>LOG THE FUCK IN</p>
            <TextInput 
                label='email'
                defaultValue={email}
                onChange={(v) => setEmail(v)}
            />
            <TextInput 
                label='password'
                onChange={(v) => setPassword(v)}
                type='password'
            />
            {error && <span>{error}</span>}
            <Button 
                type='submit'
                text='login'
                action={handleSubmitLogin}
            />
        </div>
    )
}

export default Login;