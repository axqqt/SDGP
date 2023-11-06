import axios from "axios";
import "./App.css";
import { useState } from "react";

const Register = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
 
    axios
      .post("http://localhost:8000/newuser", { username: data })
      .then((r) => props.onAuth({ ...r.data, secret: data }))
      .catch((e) => console.log("Auth Error", e));
  };

  const [data,setData] = useState("")

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>
        <div className="form-subtitle">Set a username to get started</div>
        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" onChange={(e)=>{
            setData(e.target.value)
          }} />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
