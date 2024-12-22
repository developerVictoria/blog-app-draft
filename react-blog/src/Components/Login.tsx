/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from '../feature/UserSlice.tsx'
import "./Login.css";
import axios from 'axios';

const Login = () => {

    const [fullName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const api_url = "http://localhost:3000/users/"
    const login_url = "http://localhost:3000/users/login";
    const register = () => {
        axios.post(api_url, {
            fullName: fullName,
            email: email,
            password: password,
        })
            .then((data: any) => {
                console.log('I made a user: ', data.data.user_Id);
                dispatch(setUserData({
                    id: data.data.user_Id,
                    fullName: fullName,
                    email: email,
                    password: password,
                }));


            })
            .catch((err) => {
                console.log(err);

            })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post(login_url, {
            fullName: fullName,
            email: email,
            password: password,
        })
            .then((data: any) => {
                console.log("I logged in");
                dispatch(setUserData({
                    id: data.data.id,
                    fullName: fullName,
                    email: email,
                    password: password,
                }));


            })
            .catch((err) => {
                console.log(err);
                register();

            })

    };

    return (
        <div className="login">
            <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Login Here 📝</h1>
                <input
                    className='new-item'
                    type="name"
                    placeholder="Name"
                    value={fullName}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className='new-item'
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className='new-item'
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="submit_btn">
                    submit
                </button>
            </form>
        </div>
    );
};
export default Login;