import React, { useState, useRef } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/authentication/actionCreator";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

function LoginPage() {
  const form = useRef();
  const checkBtn = useRef();

  const history = useHistory();
  const dispatch = useDispatch();
  const _auth = useSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (values) => {

  //   dispatch(login(values.username, values.password))
  //   .then(()=>{
  //     history.push('/tms/quiz');
  //     window.location.reload();
  //   }).catch((e)=>{
  //     console.log('Received values of form: ', values);
  //   });

  // };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
    console.log(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    console.log(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`User name:  ${username}     passs: ${password}`);
    
    form.current.validateAll();

    dispatch(login(username, password))
    .then(()=>{
      history.push('/quiz');
      window.location.reload();
    }).catch((e)=>{
      console.log('Received values of form: ', values);
    });




    // if (checkBtn.current.context._errors.length === 0) {
    //   dispatch(login(username, password))
    //     .then(() => {
    //       props.history.push("/profile");
    //       window.location.reload();
    //     })
    //     .catch(() => {
    //       setLoading(false);
    //     });
    // } else {
    //   setLoading(false);
    // }
  };

  // if (isLoggedIn) {
  //   return <Redirect to="/profile" />;
  // }

  return (
    <div className="loginPage">
      <h2>Login Form</h2>
      <Form onSubmit={handleLogin} ref={form}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <Input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={onChangeUsername}
            //validations={[required]}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onChangePassword}
            //validations={[required]}
          />
        </div>

        <div className="form-group">
          <button
            className="btn btn-primary btn-block"
            disabled={_auth.loading}
          >
            {_auth.loading && (
              <span className="spinner-border spinner-border-sm"></span>
            )}
            <span>Login</span>
          </button>
        </div>

        {_auth.error && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {_auth.error}
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </div>
  );
}

export default LoginPage;
