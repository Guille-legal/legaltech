import React, { useState } from 'react';
import axios from 'axios';

const CustomRegister = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/auth/realms/myrealm/protocol/openid-connect/token', {
        client_id: 'my-client',
        username,
        email,
        password,
        grant_type: 'password',
        scope: 'openid',
      });

      if (response.status === 200) {
        alert('Registration successful');
      }
    } catch (err) {
      setError('Registration failed: ' + err.message);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default CustomRegister;