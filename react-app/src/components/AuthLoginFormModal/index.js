import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";

// import "./LoginForm.css";

function LoginFormModal() {
  const dispatch = useDispatch();
  const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
      history.push('/profile')
      closeModal()
    }
  };

  return (
    <div className="modal-content">
      <div className="modal-header">

        <div className="modal-title">
          Login

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
            Username or Email
          </div>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="modal-field">
          <div>
            Password
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="modal-submit" type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginFormModal;
