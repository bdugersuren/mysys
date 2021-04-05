import React from "react";
//import { hot } from 'react-hot-loader/root';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

//Layouts
import AppRoute from "./layouts/AppRoute";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

//Pages
import { store, persistor } from "./redux/store";
import Page1 from "./tmp/Page1";
import Page2 from "./tmp/Page2";
import QuizPage from "./pages/QuizPage";
import TaskBankPage from "./pages/TaskBankPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";



const ProviderConfig = () => {
  return (
    <Router>
     
      <AppRoute path="/quizs" layout={MainLayout} component={QuizPage} />
      <AppRoute path="/tasks"  layout={MainLayout}  component={TaskBankPage} />
      <AppRoute path="/admin"  layout={MainLayout}  component={Page2} />
      <AppRoute exact  path="/login"  layout={AuthLayout}  component={LoginPage} />
      <AppRoute exact  path="/register"  layout={AuthLayout}  component={RegisterPage} />
      <Route exact path="/"  component={Page1} />
    </Router>
  );
};

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ProviderConfig />
      </PersistGate>
    </Provider>
  );
}

export default App;
