import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom'
import auth from './firebase';
import './Registration.css';

const Registration = () => {
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

    const signUp = async (e) => {
        e.preventDefault()
 await auth.createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='container'>
            <div className="regis"><h1>Registration Form:</h1></div>
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
                <div>Already have an account <Link to = "/login" >Login Here </Link> </div>
                <button type="submit" className="btn btn-primary" onClick={signUp}>Sign Up</button>
            </form>
        </div>
    )
};

export default Registration;
