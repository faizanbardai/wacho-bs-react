import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { api_login } from "../APIs";

export default function LoginModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await api_login({ username: email, password });
    switch (response.status) {
      case 200:
        // OK
        const token = await response.json();
        localStorage.setItem("token", token.token);
        props.setAuthorized();
        break;
      case 401:
        // unauthorized
        localStorage.removeItem("token");
        break;
      default:
        console.log("Some error");
    }
  };

  return (
    <>
      <Container>
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <form
            style={{ minWidth: "300px" }}
            className="form-signin"
            onSubmit={handleSubmit}
          >
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-3 form-control"
              placeholder="Email address"
              required
              autoFocus
            />
            <label htmlFor="inputPassword" className="sr-only">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-3 form-control"
              placeholder="Password"
              autoComplete="on"
              required
            />

            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </Container>
    </>
  );
}
