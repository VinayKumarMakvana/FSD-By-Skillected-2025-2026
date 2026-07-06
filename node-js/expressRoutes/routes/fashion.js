const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send(`the data for postmen is ${req.body}`);
});

router.post('/men', (req, res) => {
  res.send('Fashion POST men route');
});

module.exports = router;