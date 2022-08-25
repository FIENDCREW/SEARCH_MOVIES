import React, { createContext, useMemo } from 'react';
import ChildOne from './compontents/ChildOne';
import { myUsers, UsersContext } from './context';

const UseContext = () => {
  return (
    <UsersContext.Provider value={myUsers}>
      <ChildOne />
    </UsersContext.Provider>
  );
};

export default UseContext;
