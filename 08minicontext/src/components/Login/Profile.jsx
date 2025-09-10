import React, { useContext } from "react";
import UserContext from "../../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user)
    return (
      <h1 className="text-black text-2xl text-center">User not logged in</h1>
    );
  return (
    <div className="bg-yellow-500">
      <h1 className="text-black text-2xl text-center ">
        Profile : {user.username}
      </h1>
    </div>
  );
}

export default Profile;
