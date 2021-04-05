import React, { Component } from 'react';

//login, register, forget
const AuthLayout = (props) => {
 
      return (
      <div>
        <div>This is Auth header page</div>
        {props.children}
        <div>This is Auth footer page</div>
      </div>     
      );

};
export default AuthLayout;
