import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import TextField from '../../components/TextField/TextField';
import { EventProvider } from '../../utils/eventemitter/EventProvider';

const LoginPage: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleButtonEvent = (data: any) => {
    console.log(userName, password);
    console.log('Button Clicked:', data);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <EventProvider>
          <TextField
            inputLabel="Username"
            inputType="text"
            inputValue={userName}
            outputChange={handleUserNameChange}
          />
          <TextField
            inputLabel="Password"
            inputType="password"
            inputValue={password}
            outputChange={handlePasswordChange}
          />
          <Button inputText="Login" outputEvent={handleButtonEvent} />
        </EventProvider>
      </div>
    </div>
  );
};

export default LoginPage;
