import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  "@fortawesome/fontawesome-free/css/all.min.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'remixicon/fonts/remixicon.css'
import './index.css'
import { Provider } from 'react-redux';
import { Store } from './Redux/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(


    <Provider store={Store}>
            <App />
    
    </Provider>
  
)
