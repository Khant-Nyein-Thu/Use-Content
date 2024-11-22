import React from "react";
import Context from "./Context";
import Form from "./Form";

const App = () => {
  return (
    <div>
      <h1>Context API</h1>
      <Context.Provider value={"Hello Context!"}>
        <Form />
      </Context.Provider>
    </div>
  );
};

export default App;
