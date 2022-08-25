import React, { useContext } from 'react';
import { UsersContext } from '../context';

const NestedChild = () => {
  const data = useContext(UsersContext);
  console.log(data);
  return <div>NestetChild</div>;
};

export default NestedChild;
