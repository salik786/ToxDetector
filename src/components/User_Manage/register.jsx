import './styleUser.css';

import { useState } from 'react';
import axios from "axios"

const Register = () => {
    const [registerData, setRegisterData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        confirmpassword: ""

    })
    const [errors1, setErrors] = useState({})
    const [emptyErrors, setEmptyErrors] = useState({})


    const handleInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        setRegisterData({ ...registerData, [name]: value })//here [name]:value is targettign each one of field accroding to name and assigned a value
    }


    const handleSubmit = (event) => {
        event.preventDefault(); //default action that belongs to the event will not occur.
        setErrors(emptyErrors)
        const { firstname, lastname, username, email, password, confirmpassword } = registerData;
        const user = { firstname, lastname, username, email, password, confirmpassword };
        axios.post("http://localhost:6563/User/register", user).then(res => {
            console.log(res.data)

        }).catch(err => {
            const error2 = err.response.data;
            setErrors(error2)
            console.log(errors1);
        })

    }
    return (
        <>
            <div className="register-form-container">
                <div className="left-register-form">
                    <form className="form" onSubmit={handleSubmit}>
                        <h1>Registration</h1>
                        <p>Sign Up/Register From Social Accounts</p>
                        <div className="social-btns">
                            <button className="soc-btn fb">Facebook</button>
                            <button className="soc-btn goog">Google</button>
                            <button className="soc-btn twit">Twitter</button>
                        </div>
                        <p>Or  by filling the form </p>
                        <input type="text" placeholder="First Name"
                            value={registerData.firstname}
                            onChange={handleInput}
                            name="firstname" id="firstname" />
                        <input type="text" placeholder="Last Name"
                            value={registerData.lastname}
                            onChange={handleInput}
                            name="lastname" id="lastname" />

                        <input type="text" placeholder="Username"
                            value={registerData.username}
                            onChange={handleInput}
                            name="username" id="username" />

                        <input type="email" placeholder="Email"
                            value={registerData.email}
                            onChange={handleInput}
                            name="email" id="email" />
                        <input type="password" placeholder="Password"
                            value={registerData.password}
                            onChange={handleInput}
                            name="password" id="password" />
                        <input type="confirmpassword" placeholder="Confirm Password"
                            value={registerData.confirmpassword}
                            onChange={handleInput}
                            name="confirmpassword" id="confirmpassword" />
                        <button type="submit" className="register-btn">Register</button>
                    </form>
                </div>
                <div className="right-register-form">
                    <h1 className="heading">TOXDETECTOR </h1>
                    <img src="https://i.ibb.co/BtXHPtW/Untitled-design.png" alt="Untitled-design" border="0"></img>

                </div>

            </div>
        </>
    )
}

export default Register;
