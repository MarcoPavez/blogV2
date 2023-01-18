import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

const Register = () => {
  //Luego de crear rutas y controladores, creamos las constantes que permitirán retener los datos ingresados por el usuario
  //Para luego almacenarlos en la bbdd

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err,setErr] = useState(null)
  
  const navigate = useNavigate()
  
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault()
    try{

      await axios.post("/auth/register", inputs)
      navigate("/login")
    }catch(err){

      setErr(err.response.data)
    }
  }

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
        <button onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
        <span>
          ¿Ya tienes una cuenta? <Link to="/login">Ingresa aquí</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
