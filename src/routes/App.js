import React from "react";
import "../assets/styles/App.scss";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Route path="/" component={Searcher} />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
