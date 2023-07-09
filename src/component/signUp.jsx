import { useState } from "react";

    const SignUp = () => {
        const [username, setUsername] = useState ('')
        const [email, setEmail] =  useState('')
        const [password, setPassword] = useState('')

const handleSubmit = (event)=> {
    event.preventDefault();
};

  return (
    <div className="signup">
        <h1>Sign Up Page</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">
                Username:
            </label>
            <input type="text" 
            id="username"
            name="username-input" 
            value= {username} 
            placeholder='Username' 
            onChange={(event) => setUsername(event.target.value)} required/>
            <br />
            <label className="email" htmlFor="email">
                Email:                         
            </label>
            <input type="text" 
            name="email-input" 
            placeholder="Email" 
            value={email} 
            id="email"
            onChange={(event) => (event.target.value)} required/>
            <br />
            <label htmlFor="password">
                Password:
            </label>
            <input type="password"
            name="password-input" 
            id="password"
            placeholder="Password" 
            onChange={(event) => (event.target.value)} required/>
            <br />
            <button type="submit">Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp;
