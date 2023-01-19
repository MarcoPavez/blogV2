// Los objetos de propiedad context sirven para no codificar un path
//de informacion directo desde los datos/bbdd a la aplicacion en si.
// En lugar de llamar desde el frontend a datos del backend, se utiliza
// el contexto para almacenar en cache los datos de la bbdd y se utilizan desde la misma cache

import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // Children en este caso es App.js

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  //FUNCION LOGIN
  const login = async (inputs) => {
    const res = await axios.post("/auth/login", inputs);
    setCurrentUser(res.data);
  };

  //FUNCION LOGOUT
  const logout = async (inputs) => {
    await axios.post("/auth/logout");
    setCurrentUser(null);
  };

  //¿como cambiamos el localStorage de la consola del navegador cada vez que cambiamos de usuario?
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser))
  }, [currentUser]);

  return <AuthContext.Provider value={{currentUser, login, logout}}>
    {children}
  </AuthContext.Provider>
};
