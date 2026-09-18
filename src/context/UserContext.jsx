import { createContext } from "react";

// Create a Context to share student information
export const UserContext = createContext();

export function UserProvider({ children }) {
  // Student information
  const user = {
    name: "Student",
    branch: "Information Science",
    semester: "3rd Semester"
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}
