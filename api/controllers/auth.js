import { db } from "../db.js"
import bcrypt from "bcryptjs"

export const register = (req,res) => {
    // CHECK si el usuario ya existe
    const q = "SELECT * FROM users WHERE email = ? or username = ?"
    
    //Query a la bbdd, traeme la query de linea 5, pegala en un 
    // array (primero email y luego username), luego funcion con parametros err y data
    db.query(q, [req.body.email, req.body.username], (err,data) => {
        
        // Si hay un error (V o F) retorna el error (res de respuesta, json por el formato)
        if(err) return res.json(err)
        /* Si data presenta informacion (length) significa que usuario existe*/
        if(data.length) return res.status(409).json("El usuario ya existe")

        // Ahora nos interesa NO postear la información de la contraseña (por ejemplo)
        // Tal como el usuario la escribe, sino nos interesa encriptarla para que así ni siquiera
        // nosotros podamos conocerla

        //Hash la contraseña y se crea el usuario
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        //Insertamos los datos entregados por el usuario a la bbdd, el (?) son todos los datos que el
        //usuario nos entrega
        const q ="INSER INTO users ('username','email','password') VALUES (?)"
        const values = [
            req.body.username,
            req.body.email,
            hash,
        ]

        db.query(q,[values], (err,data)=>{
            if(err) return res.json(err);
            return res.status(200).json("Usuario creado correctamente")
        })
    })
}

export const login = (req,res) => {
    
}

export const logout = (req,res) => {
    
}