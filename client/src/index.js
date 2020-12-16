import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css'

//REDUX
import { Provider } from 'react-redux';
import Store from './appStore/Store'

//AUTH0
import { Auth0Provider } from "@auth0/auth0-react";
import config from "./config.json";

ReactDOM.render(

  <Auth0Provider
    domain={config.AUTH0_DOMAIN}
    clientId={config.AUTH0_CLIENT_ID}
    redirectUri={config.REDUIRECT_URI}
    //redirectUri={window.location.origin}
    audience={config.AUDIENCE}
  >
    <Provider store={Store} >
      <App />
    </Provider>
  </Auth0Provider>,
  document.getElementById("root"));