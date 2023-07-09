import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/')
  };

  /*Handle Form Submission */

  return (
    <div className="main-container" id="signup">
      <h1>Login </h1>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            type="text"
            name="email-input"
            placeholder="example@gmail.com"
            value={email}
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            type="password"
            name="password-input"
            id="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          <br />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Already Logged in ?{" "}
        <Link className="login" to="/signup">
          Signup
        </Link>{" "}
      </p>
    </div>
  );
};

export default Login;
