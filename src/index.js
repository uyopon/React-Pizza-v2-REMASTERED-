import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { store } from './redux/store'
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  
    <Provider store={store}>

      <App />

    </Provider>

  </BrowserRouter>
);



// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// z я
// cd react_pizza_2
// !
// c
// Z
//A

//pizza
