const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv");
app.use(express.json());
app.use(cors());



app.listen(process.env.PORT, () => {
    console.log("hey it's working that was easy");
  });