import express from "express"
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"
import authRoutes from "./routes/auths.js"

const app = express()

app.use(express.json())
app.use("/api/posts", postRoutes)

app.listen(8080, () => {
    console.log("Servidor conectado exitosamente en el puerto 8800")
})