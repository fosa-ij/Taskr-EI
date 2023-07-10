import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState ('')
    const [email, setEmail] =  useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const navigate = useNavigate()

const handleSubmit = (event)=> {
    event.preventDefault();
    navigate('/login')
    
};

/*Handle Form Submission */

  return (
    <div className="main-container" id="signup">
      <h1>Sign Up </h1>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            className="username"
            type="text"
            id="username"
            name="username-input"
            value={username}
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
            required
          />

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
          <input
            type="password"
            name="password-input"
            id="cpassword"
            placeholder=" Confirm Password"
            onChange={(event) => setCPassword(event.target.value)}
            required
          />
          <br />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already signed up? <Link className="login" to="/login">Login</Link>{" "}
      </p>
    </div>
  );
}

export default SignUp;
