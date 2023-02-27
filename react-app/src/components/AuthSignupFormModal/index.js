import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
// import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const history = useHistory()
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState([]);
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			const data = await dispatch(signUp(username, email, password));
			if (data) {
				setErrors(data);
			} else {
				history.push('/profile')
				closeModal();
			}
		} else {
			setErrors([
				"Those passwords don't match",
			]);
		}
	};

	return (
		<div className="modal-content">
			<div className="modal-header">

				<div className="modal-title">
					Sign-Up

				</div>

				<div className="modal-exit" onClick={closeModal}>
					ⓧ
				</div>
			</div>
			<div className="error-box">
				{errors?.map((error, idx) => (
					<div key={idx}>{error}</div>
				))}
			</div>
			<form className='modal-form' onSubmit={handleSubmit}>
				<div>
					<div className="modal-field">
						Email
					</div>
					<input
						type="text"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						pattern="[\w-]+@([\w-]+\.)+[\w-]+"
						title="Match the format!"
						
					/>
				</div>
				<div>
					<div className="modal-field">
						Username
					</div>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
						min='6'
						
					/>
				</div>
				<div>
					<div className="modal-field">
						Password
					</div>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						minLength='6'
					/>
				</div>
				<div>
					<div className="modal-field">
						Confirm Password
					</div>
					<input
						type="password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</div>
				<button className="modal-submit" type="submit">Sign Up</button>
			</form>
		</div>
	);
}

export default SignupFormModal;