import React, { useContext } from "react";
import Context from "../Context/Context";

const withContext = WrappedComponent => {
  const Component = props => {
    return <WrappedComponent {...props} {...useContext(Context)} />;
  };
  return Component;
};

export default withContext;
