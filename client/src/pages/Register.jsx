import React, {useState} from "react";
import { Link } from "react-router-dom";

const Register = () => {
  //Luego de crear rutas y controladores, creamos las constantes que permitirán retener los datos ingresados por el usuario
  //Para luego almacenarlos en la bbdd

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          onChange={handleChange}
        ></input>
        <input
          required
          type="email"
          placeholder="Correo electrónico"
          name="email"
          onChange={handleChange}
        ></input>
        <input
          required
          type="password"
          placeholder="Contraseña"
          name="password"
          onChange={handleChange}
        ></input>
        <button>Register</button>
        <p>El usuario y/o contraseña son incorrectos</p>
        <span>
          ¿Ya tienes una cuenta? <Link to="/login">Ingresa aquí</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
