import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const AuthProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img id="profile-img" src={user.picture} alt={user.name} />
        <p>{user.name}</p>
        {/* <p>{user.email}</p> */}
      </div>
    )
  );
};

export default AuthProfile;