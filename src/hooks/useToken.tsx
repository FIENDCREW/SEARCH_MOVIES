import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { setTokenSourceMapRange } from 'typescript';

const useToken = () => {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return useToken?.token
  };
  const [token, useToken] = useState(getToken());
  const saveToken = (userToken: { token: any; }) => {
    sessionStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  }
  return (
    <div>
      123
    </div>
  );
};

export default useToken;

