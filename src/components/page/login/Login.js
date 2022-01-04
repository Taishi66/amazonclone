import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { auth } from "../../../firebase.js"

function Login() {
    const history = useNavigate();//react router v6 doesnt use useHistory anymore
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();//this stop the refresh
        //do the login logic
        auth
            .signInWith(email, password)
            .then(auth => {
                //logged in, redirect to homepage
                // react v5 -> history.push('/');
                history('/', { replace: true });
            })
            .catch(error => alert(error.message));
    }
    const register = event => {
        event.preventDefault();
        //do the login logic
        auth
            .createUser(email, password)
            .then(auth => {
                //create a user and logged in
                history('/', { replace: true });
            })
            .catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <Link to="/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="Amazon logo"
                    className="login__logo"
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="mail" name='mail' id="email" value={email} onChange={event => setEmail(event.target.value)} />
                    <h5>Password</h5>
                    <input type="password" name="mdp" id="mdp" value={password} onChange={event => setPassword(event.target.value)} />
                    <button className='login__signIn__button '>Sign in</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy
                    Notice.
                </p>
                <button className='login__register__button'>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
