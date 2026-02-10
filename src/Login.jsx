import { useState } from "react";

const database = {
  email: "Dude@gmail.com",
  password: "464646",
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email !== database.email) {
      setError("Email not found");
      return;
    }

    if (password !== database.password) {
      setError("Incorrect Password");
      return;
    }

    setError("");
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="login">
          <h2>Login Successful</h2>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div className="login">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <label>Login ID</label>
            <input
              type="email"
              placeholder="Enter Your Mail ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" disabled={!email || !password}>
              Login
            </button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}

      <div className="signup">
        New User <a href="/signup">Signup.jsx</a>
      </div>
    </>
  );
}

export default Login;