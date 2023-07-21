import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { auth} from "../config/todoDatabase";
import GoogleAuthButton from "../config/google";

const SignUp = () => {
    const [username, setUsername] = useState ('')
    const [email, setEmail] =  useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const navigate = useNavigate()
    
    


const handleSubmit = (event)=> {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
      setEmail('')
      setPassword('')
      setCPassword('')
    
    
};

/*Handle Form Submission */

  return (
    <div className="main-container" id="signup">
      <h1>Sign Up </h1>
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
        Already signed up?{" "}
        <Link className="login" to="/login">
          Login
        </Link>{" "}
      </p>
      <hr></hr>
      <p>Or</p>
      <GoogleAuthButton />
    </div>
  );
}

export default SignUp;
