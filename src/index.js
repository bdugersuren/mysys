import React,{Suspense} from 'react';
import App from './App';
import reactDOM from 'react-dom';
import './postcss/style.css';


reactDOM.render(
    <Suspense fallback={(<div>~~~~~~</div>)}>
      <App />
  </Suspense>,document.getElementById('root'))

