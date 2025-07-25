import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem("user_id") || null);
  const [name ,setName] = useState(localStorage.getItem("name") || null);

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id");
    const storedName = localStorage.getItem("name");
    if (storedUserId) setUserId(storedUserId);
    if (storedName) setName(storedName);
  }, []);

  const login = (user_id, name) => {
  sessionStorage.setItem("user_id", user_id);
  sessionStorage.setItem("name", name);
    setUserId(user_id); // trigger re-render
    setName(name);
  };

  const logout = () => {
    sessionStorage.clear();
    setUserId(null);
    setName(null);
  };

  return (
    <AuthContext.Provider value={{ userId, login, logout ,name }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
