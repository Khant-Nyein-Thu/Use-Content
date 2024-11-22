import React, { useContext } from "react";
import Context from "./Context";

const Form = () => {
  const value = useContext(Context);
  console.log(value, typeof value);

  return (
    <form>
      <input type="text" />
      <input type="submit" value="submit" />
    </form>
  );
};

export default Form;
