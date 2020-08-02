import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import Home from "./components/Home";
import { Router, Link } from "@reach/router";
import Details from "./components/Details";
import configureStore from "./api/store";

const store = configureStore();

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <div>
          <header>
            <Link to="/">
              <h1
                className="text-center text-purple text-5xl my-8"
                id="site-title"
              >
                Virginia Beach Guide to Getting Down!!
              </h1>
            </Link>
          </header>
          <main>
            <Router>
              <Home path="/" />
              <Details path="/details/:slug" />
            </Router>
          </main>
        </div>
      </Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
