import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err,setErr] = useState(null)
  
  const navigate = useNavigate()
  
  const {login} = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault()
    try{

      login(inputs)
      navigate("/")
    }catch(err){

      setErr(err.response.data)
    }
  }

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='Nombre de usuario' name="username" onChange={handleChange}></input>
        <input required type="password" placeholder='Contraseña' name="password" onChange={handleChange}></input>
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></span>
      </form>
      </div>
  )
}

export default Login