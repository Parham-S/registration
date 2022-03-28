import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Input from "../../components/Input";

function Register() {
	return (
		<div className='containerRegister'>
			<div className='textsRegister'>
				<h1>Registration Page</h1>
				<p>Enter your details below</p>
			</div>
			<div className='inputsRegister'>
				<Input text='Name' />
				<Input text='Username' />
				<Input text='Phone' />
				<Input text='Email' />
				<Input text='Password' />
			</div>
			<button className='buttonRegister'>Register</button>
			<div className='dontHaveAccount'>
				<p>
					I'm already registered!{" "}
					<Link to='/login' className='spanLogin'>
						Login
					</Link>
				</p>
			</div>
		</div>
	);
}

export default Register;
