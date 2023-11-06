import axios from "axios";
import "./App.css";
import { useState } from "react";

const Register = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/newuser", { username: username })
      .then((r) => props.onAuth({ ...r.data, secret: password }))
      .catch((e) => console.log("Auth Error", e));
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>
        <div className="form-subtitle">Set a username to get started</div>
        <div className="auth">
          <input
            className="auth-input"
            placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            className="auth-input"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
