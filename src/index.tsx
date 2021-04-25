import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { store } from "./store/Store";
import { muiTheme } from "./MuiTheme";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
