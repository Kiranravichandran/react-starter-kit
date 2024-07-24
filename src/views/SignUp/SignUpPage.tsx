import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import TextField from '../../components/TextField/TextField';

const SignUpPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <TextField
          inputLabel="Username"
          inputType="text"
          inputValue={username}
          outputChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          inputLabel="Password"
          inputType="password"
          inputValue={password}
          outputChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          inputLabel="Password"
          inputType="password"
          inputValue={password}
          outputChange={(e) => setPassword(e.target.value)}
        />
        <Button inputText="SignUp" outputEvent={handleLogin} />
      </div>
    </div>
  );
};

export default SignUpPage;
