import { db } from "../db.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

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
        const q ="INSERT INTO users(`username`,`email`,`password`) VALUES (?)"
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
    
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q, [req.body.username], (err,data) => {
        if (err) return res.json(err);
        if (data.length === 0) return res.status(404).json("Usuario no existe")

        //COMPROBAR CONTRASEÑA

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

        if(!isPasswordCorrect) return res.status(400).json("Usuario y/o contraseña incorrectos")

        //COMPRUEBA SI EL TOKEN DEL USUARIO ES EL MISMO TOKEN DEL POST, COMPRUEBA QUE POSTS
        //PERTENECEN REALMENTE AL USUARIO, ASI NO SE EDITAN O ELIMINAN POST AJENOS
        const token = jwt.sign({id:data[0].id}, "jwtkey");
        const {password, ...other} = data[0]

        res.cookie("acces_token", token, {
            httpOnly:true
        }).status(200).json(other)
    })
}

export const logout = (req,res) => {
    
}