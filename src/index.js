import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import './index.css';
import App from './App';
import { CartProvider } from './context/cart';
import { Auth0Provider } from "@auth0/auth0-react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-fuvx3vmayyl7tqrf.us.auth0.com"
      clientId="B49ijVfCHDZ7rUQoo69YhhTnXSNesoa4"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
