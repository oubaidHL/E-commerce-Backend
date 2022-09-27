const express = require("express");
const app = express();
const cors = require("cors");
const CategoriesRoutes = require("./src/Routes/Category");
const SubCategoriesRoutes = require('./src/Routes/SubCategory');
const ProductRoutes = require('./src/Routes/Product');

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/categories/", CategoriesRoutes);
app.use("/subcategories/",SubCategoriesRoutes);
app.use("/product/",ProductRoutes);


app.listen(process.env.PORT, () => {
    console.log("hey it's working that was easy ");
    console.log(`Server running at http://localhost:${process.env.PORT}/`);
  });