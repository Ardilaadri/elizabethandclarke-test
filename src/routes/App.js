import React from "react";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import Main from "../components/Main";
import Article from "../components/Article";
import "../assets/styles/App.css";

function App() {
  return (
    <>
      <body>
        <div className="App">
          <Header />
          <Welcome />
          <Main />
          <Article />
        </div>
      </body>
    </>
  );
}

export default App;
