import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./store/reducer";
import "./styles.css";
import { ParentComponent } from "./components/parentComponent";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>React Redux Example</h1>
        <h4>A simple example combine with React, Redux, HOC</h4>
        <ParentComponent />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
