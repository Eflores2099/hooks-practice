import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./Providers/Store";

function Index() {
  return (
    <Store>
      <App />
    </Store>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
