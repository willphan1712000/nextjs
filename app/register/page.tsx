import React from 'react';
import RegisterBlock from './components/RegisterBlock';
import Background from './components/Background';

const Register = () => {
  return (
    <div className='relative flex flex-col justify-center items-center h-90vh'>
      <Background></Background>
      <RegisterBlock></RegisterBlock>
    </div>
  )
}

export default Register
