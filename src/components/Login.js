import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel, Checkbox } from "react-bootstrap";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div   id="form-content">
    <div></div>
    <h2>
        Welcome 
    </h2><div></div>
    <p>Login to continue</p>
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel name =' Email Address' placeholder='Email Address' ></ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder='Email Address'

          />
        </FormGroup>

        <div></div>
        
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel> </ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder='Password'
          />
        </FormGroup>
        <div className="blue">
        <FormGroup >
        <Checkbox>
          <ControlLabel   > 
          Remember Me
          </ControlLabel>
          </Checkbox>
          <ControlLabel > 
           Forgot Password ?

          </ControlLabel>
          </FormGroup>
          </div>
        <Button className="b1" block bsSize="large" disabled={!validateForm()} type="submit">
          LOGIN
         
        </Button>
  
  <Button className="b2" block bsSize="large" disabled={!validateForm()} type="submit">
        LOGIN WITH SSO

        </Button>

        
      </form>
      </div>

  );
}