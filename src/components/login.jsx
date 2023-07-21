import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/todoDatabase";
import GoogleAuthButton from "../config/google";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    
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
            placeholder="email"
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
        Not yet signed up?{" "}
        <Link className="login" to="/signup">
          Signup
        </Link>{" "}
      </p>
      <hr></hr>
      <p>Or</p>
      <GoogleAuthButton />
    </div>
  );
};

export default Login;
