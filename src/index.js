import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Slider from './Slider';
import Container_1 from './Container_1';
import Collection_list from './Collection_list';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Slider />
    <Container_1 />
    <Collection_list />
  </React.StrictMode>
);

reportWebVitals();
