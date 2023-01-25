import { db } from "../db.js"
import jwt from "jsonwebtoken"

export const getPosts = (req,res) => {
    const q = req.query.cat 
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts"

    db.query(q, [req.query.cat], (err,data) => {
        if (err) return res.status(500).send(err);

        return res.status(200).json(data);
    })
}

export const getPost = (req,res) => {
    const q = "SELECT p.id, `username`, `title`, `desc`, `img`, `cat`, `date` FROM users u JOIN posts p ON u.id = p.userid WHERE p.id = ?"

    db.query(q, [req.params.id], (err,data) => {
        if (err) return res.status(500).json(err)

        return res.status(200).json(data[0])
    })
}

export const addPost = (req,res) => {
    
    const token = req.cookies.access_token
    if(!token) return res.status(401).json("Sin autorización")

    //Verificar token usando jwt
    jwt.verify(token, "jwtkey", (err, userInfo)=>{
        if(err) return res.status(403).json("Token inválido");
    
        const q = "INSERT INTO posts(`title`,`desc`,`img`,`cat`,`date`,`userid`) VALUES (?)"

        const values = [
            req.body.title,
            req.body.desc,
            req.body.img,
            req.body.cat,
            req.body.date,
            userInfo.id
        ]

        db.query(q,[values], (err,data) => {
            if(err) return res.status(500).json(err)
            return res.status(200).json("La publicación se ha creado con éxito")
        })
    })

}

export const deletePost = (req,res) => {
    const token = req.cookies.access_token
    if(!token) return res.status(401).json("Sin autorización")

    //Verificar token usando jwt
    jwt.verify(token, "jwtkey", (err, userInfo)=>{
        if(err) return res.status(403).json("Token inválido")

        const postId=req.params.id
        const q = "DELETE FROM posts WHERE `id` = ? AND `userid` = ?"

        db.query(q,[postId,userInfo.id], (err,data) => {
            if(err) return res.status(403).json("Acción prohibida, no cuentas con los permisos necesarios")

            return res.json("La publicación ha sido eliminada")
        })
    })
}

export const updatePost = (req,res) => {
    
    const token = req.cookies.access_token
    if(!token) return res.status(401).json("Sin autorización")

    //Verificar token usando jwt
    jwt.verify(token, "jwtkey", (err, userInfo)=>{
        if(err) return res.status(403).json("Token inválido");
    
        const postId = req.params.id
        const q = "UPDATE posts SET `title`=?,`desc`=?,`img`=?,`cat`=? WHERE `id` = ? AND `userid` = ?"

        const values = [
            req.body.title,
            req.body.desc,
            req.body.img,
            req.body.cat,
        ]

        db.query(q,[...values, postId, userInfo.id], (err,data) => {
            if(err) return res.status(500).json(err)
            return res.status(200).json("La publicación se ha creado con éxito")
        })
    })

}