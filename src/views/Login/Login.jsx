import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const handleSingIn = (event) => {
    event.preventDefault();

    signInWithEmailAndPassword(email, password)
      .then(() => {
        <Navigate to={"/dasboard"} />;
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  return (
    <div className="login-container">
      <form className="form-container" onSubmit={handleSingIn}>
        <label htmlFor="username">Username</label>
        <input className="input" type="text" name="username" />
        <label htmlFor="email">Email</label>
        <input
          className="input"
          type="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          className="input"
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit"> Sing in</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
