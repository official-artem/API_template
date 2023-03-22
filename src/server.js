const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors())

// write your own endpoint
// app.use('/endpoint', express.json(), Router)

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }

  console.log(`API is ready on http://localhost:${PORT}`);
})