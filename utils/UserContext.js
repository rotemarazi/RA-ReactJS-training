import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Anybody",
});

export default UserContext;
