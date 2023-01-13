import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder='Nombre de usuario'></input>
        <input required type="email" placeholder='Correo electrónico'></input>
        <input required type="password" placeholder='Contraseña'></input>
        <button>Register</button>
        <p>El usuario y/o contraseña son incorrectos</p>
        <span>¿Ya tienes una cuenta? <Link to="/login">Ingresa aquí</Link></span>
      </form>
      </div>
  )
}

export default Register