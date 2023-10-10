import React from "react";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
