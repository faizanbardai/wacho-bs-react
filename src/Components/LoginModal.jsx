import React, { useState } from "react";
import { Container } from "react-bootstrap";

export default function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
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
