import express from "express"
const app = express()
const port = 3000

// respond with "hello world" when a GET request is made to the homepage
app.get('/api/health', (req, res) => {
  res.json({message: "server is running!"})
})

app.listen(port, () => {
    console.log(`Example listening on port ${port}`)
})