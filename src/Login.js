import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import auth from './firebase';
import './Registration.css';

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const { email, password } = input;
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name, value);
        setInput({ ...input, [name]: value });
    }
    const login = async (e) => {
        e.preventDefault()
         await auth.signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='container'>
            <div className="regis"><h1>Login Form:</h1></div>
            <form className='form'>

                <div className="mb-3">

                    <label forhtml="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        name='email'
                        value={input.email}
                        onChange={handleInput}
                    />
                    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div className="mb-3">
                    <label forhtml="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        name='password'
                        value={input.password}
                        onChange={handleInput}
                    />
                </div>
                <div className="mb-3 form-check">

                </div>
                <div> For new user <Link to = "/register" >Sign up Here </Link> </div>
                <button type="submit" className="btn btn-primary" onClick={login}>Login</button>
            </form>
        </div>
    )
};

export default Login;
