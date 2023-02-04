import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const AuthProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  return (
    isAuthenticated && (

      <p>Signed in as: {user.name}</p>

    )
  );
};

export default AuthProfile;