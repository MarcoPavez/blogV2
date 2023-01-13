import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input required type="text" placeholder='Nombre de usuario'></input>
        <input required type="password" placeholder='Contraseña'></input>
        <button>Login</button>
        <p>El usuario y/o contraseña son incorrectos</p>
        <span>¿No tienes una cuenta? <Link to="/register">Regístrate</Link></span>
      </form>
      </div>
  )
}

export default Login