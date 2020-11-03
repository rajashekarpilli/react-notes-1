import React, { useContext } from "react";
import { UserContext } from "./UserContext";

// This component displays name from Context
const Name = () => {
  const user = useContext(UserContext);

  return (
    <div style={{ marginTop: "30px" }}>
      <h4 className="is-size-4">
        <strong>Name</strong>: {user.name}
      </h4>
    </div>
  );
};

export default Name;
