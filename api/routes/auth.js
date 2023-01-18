import express from "express"
import { login, logout, register } from "../controllers/auth.js"


const router = express.Router()

/* Controlador para POST de informacion de registro a la bbdd */
router.post("/register"),register
router.post("/login",login)
router.post("/logout",logout)

export default router