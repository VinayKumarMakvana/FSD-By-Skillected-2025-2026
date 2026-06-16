const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/vinay', (req, res) => {
  res.send('Hello vinay! how are you?')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})