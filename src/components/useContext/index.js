import React, { useContext } from "react";
import { ChannelContext, UsernameContext } from "../..";

const UserContext = () => {
  const user = useContext(UsernameContext);
  const title = useContext(ChannelContext);
  return (
    <div>
      {user} = {title}
    </div>
  );
};

export default UserContext;
