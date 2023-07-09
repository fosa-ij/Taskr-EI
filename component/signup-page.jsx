import { useState } from "react";

    const SignUp = () => {
        const [username, setUsername] = useState ('')
        const [email, setEmail] =  useState('')
        const [password, setPassword] = useState('')

const handleSubmit = (event)=> {
    event.preventDefault();
};

/*Handle Form Submission */

  return (
    <div className="signup">
        <h1>Sign Up Page</h1>
        <form onSubmit={handleSubmit}>
            <div className="input-field">
                <label htmlFor="username">
                    Username:
                </label>
                <input className="username" type="text" 
                id="username"
                name="username-input" 
                value= {username} 
                placeholder='Username' 
                onChange={(event) => setUsername(event.target.value)} required/>
                <label className="email" htmlFor="email">
                    Email:                         
                </label>
                <input type="text" 
                name="email-input" 
                placeholder="example@gmail.com" 
                value='' 
                id="email"
                onChange={(event) => (event.target.value)} required/>
                
                <label htmlFor="password">
                    Password:
                </label>        <br />
                <input type="password"
                name="password-input" 
                id="password"
                placeholder="Password" 
                onChange={(event) => (event.target.value)} required/>
                <br />
                </div>
                <button type="submit">Sign Up</button>
                
        </form>
    </div>
  )
}

export default SignUp;
