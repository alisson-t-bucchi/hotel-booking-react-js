import express from "express"
import {login, register} from "./routes/auth/index.js"
import autenticateToken from "./middleware/auth.js"
import { createBooking, getBooks  } from "./routes/auth/books/index.js"
import cors from "cors"

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())           //permite o uso acesso do server a diferentes dominios, deve ser limitado devido segurança

// respond with "hello world" when a GET request is made to the homepage
app.get('/api/health', (req, res) => {
  res.json({message: "server is running!"})
})

app.post('/api/auth/register', register)
app.post('/api/auth/login', login)

//Private routes
app.get('/api/bookings', autenticateToken, getBooks )
app.post('/api/bookings', autenticateToken, createBooking )


app.listen(port, () => {
    console.log(`Example listening on port ${port}`)
})