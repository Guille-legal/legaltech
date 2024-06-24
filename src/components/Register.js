import React from 'react';
import { doRegister } from '../keycloak';

const Register = () => {
  const handleRegister = () => {
    doRegister();
  };

  return (
    <div>
      <h2>Register</h2>
      <button onClick={handleRegister} className="btn btn-secondary">Register</button>
    </div>
  );
};

export default Register;