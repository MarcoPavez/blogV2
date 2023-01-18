import express from "express"

const app = express()

app.use(express.json())

app.listen(8800, () => {
    console.log("Servidor conectado exitosamente en el puerto 8800")
})