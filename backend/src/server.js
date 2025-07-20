import express from "express"
import {register} from "./routes/auth/index.js"
const app = express()
const port = 3000

app.use(express.json())

// respond with "hello world" when a GET request is made to the homepage
app.get('/api/health', (req, res) => {
  res.json({message: "server is running!"})
})

app.post('/api/auth/register', register)

app.listen(port, () => {
    console.log(`Example listening on port ${port}`)
})