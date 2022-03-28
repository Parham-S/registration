import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import Input from "../../components/Input";

function Login() {
	return (
		<div>
			<div className='containerLogin'>
				<div className='textsLogin'>
					<h1>Login</h1>
					<p>Welcome</p>
				</div>

				<div className='inputsLogin'>
					<Input texto='Email/Username/Phone' />
					<Input texto='Password' />
				</div>
				<p className='forgotPassword'>Forgot Password?</p>
				<button className='buttonLogIn'>Log In</button>
				<div className='lineOr'>
					<span>or</span>
				</div>
				<div className='socialMedia'>
					<AiOutlineInstagram />
					<BsFacebook />
					<FcGoogle />
				</div>
				<div className='dontHaveAccount'>
					<p>
						Not registered yet?{" "}
						<Link to='/register' className='spanRegister'>
							Register Now
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login;
