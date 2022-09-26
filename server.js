const express = require("express");
const app = express();
const cors = require("cors");
const CategoriesRoutes = require("./src/Routes/Category");

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/categories/", CategoriesRoutes);
app.listen(process.env.PORT, () => {
    console.log("hey it's working that was easy ");
    console.log(`Server running at http://localhost:${process.env.PORT}/`);
  });