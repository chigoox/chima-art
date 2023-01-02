import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import listener from './TOP Bar';


const root = ReactDOM.createRoot(document.getElementById('root'));
const listen = new listener()
const body = listen.selectElement('.theme')
const infoCard = document.querySelector('.artist-Info-Card-Container')
        









//add event listeners
body.addEventListener("click", listen.theme)


  
root.render(
  <React.StrictMode>
    <App body={body}/>
  </React.StrictMode>
);

