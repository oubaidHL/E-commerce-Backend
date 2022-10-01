const express = require("express");
const app = express();
const cors = require("cors");
const CategoriesRoutes = require("./src/Routes/Category");
const SubCategoriesRoutes = require('./src/Routes/SubCategory');
const ProductRoutes = require('./src/Routes/Product');
const RatingRoutes = require('./src/Routes/Rating');
const ReviewRoutes = require('./src/Routes/Review');
const AdvertisingRoutes = require('./src/Routes/Advertising');
const CartRoutes = require('./src/Routes/Cart');

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/categories/", CategoriesRoutes);
app.use("/subcategories/",SubCategoriesRoutes);
app.use("/product/",ProductRoutes);
app.use("/rating/",RatingRoutes);
app.use("/review/",ReviewRoutes);
app.use("/advertising/",AdvertisingRoutes);
app.use("/cart/",CartRoutes);


app.listen(process.env.PORT, () => {
    console.log("hey it's working that was easy ");
    console.log(`Server running at http://localhost:${process.env.PORT}/`);
  });