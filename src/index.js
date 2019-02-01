import React from "react";
import ReactDom from "react-dom";
import Home from "./Component/Home";
import Provider from "./Component/Provider";
import Context from "./Context";

const App = (
  <Provider>
    <Context.Consumer>{value => <Home theme={value.theme} />}</Context.Consumer>
  </Provider>
);

ReactDom.render(<App />, document.getElementById("root"));
