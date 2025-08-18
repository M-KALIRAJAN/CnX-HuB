import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState(null);
  // const [role, setRole] = useState(null);

  useEffect(() => {
    const storedUserId = sessionStorage.getItem("user_id"); 
    const storedName = sessionStorage.getItem("name");
      // const storedRole = sessionStorage.getItem("role");
  // if (storedRole) setRole(storedRole);
    if (storedUserId) setUserId(storedUserId);
    if (storedName) setName(storedName);

   
    

  }, []);

  // const login = (user_id, name,userRole = "superadmin") => {
  //   sessionStorage.setItem("user_id", user_id);
  //   sessionStorage.setItem("name", name);
  //     sessionStorage.setItem("role", userRole);
  //   setUserId(user_id);
  //   setName(name);
  //   setRole(userRole)
 
    
  //  }
    const login = (user_id, name) => {
    sessionStorage.setItem("user_id", user_id);
    sessionStorage.setItem("name", name);
      // sessionStorage.setItem("role", userRole);
    setUserId(user_id);
    setName(name);
    // setRole(userRole)
 
    
  };

  const logout = () => {
    sessionStorage.clear();
    setUserId(null);
    setName(null);
    // setRole(null)
  };

  return (
    <AuthContext.Provider value={{ userId, login, logout, name}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
