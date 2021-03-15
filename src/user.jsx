import React from "react";
function User(props) {
  const { name, email } = props.data
  return (
    <>
      <h3>{name}</h3>
      <h3>{email}</h3>

    </>
  );
}

export default User;
