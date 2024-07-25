import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import TextField from '../../components/TextField/TextField';
import { EventProvider } from '../../utils/eventemitter/EventProvider';

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
        <EventProvider>
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
        </EventProvider>
      </div>
    </div>
  );
};

export default SignUpPage;
