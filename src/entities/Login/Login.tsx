import React, { FC, useState } from 'react';
import style from './Login.module.scss';
import PropTypes from 'prop-types';

interface IProps {
  setToken: any;
}

const loginUser = async (credentials: any) => {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

const Login: FC<IProps> = ({ setToken }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return (
    <div className={style.login_wrapper}>
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;