const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/e-com");
const ProductSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  categories: String,
});

const SaveInDb = async () => {
  const Product = mongoose.model("products", ProductSchema);
  let data = new Product({
    name: "m8",
    brand: "micromax",
    price: 456,
    categories: "phone",
  });
  let result = await data.save();
  console.log(result);
};

//SaveInDb();

const UpdateInDb = async () => {
  const product = mongoose.model("products", ProductSchema);
  let data = await product.updateOne(
    { name: "m8" },
    { $set: { price: 4567, categories: "tablet" } }
  );
  console.log(data);
};

//UpdateInDb();

const DeleteInDb = async () => {
  const product = mongoose.model("products", ProductSchema);
  let data = await product.deleteOne({ name: "m8" });
  console.log(data);
};

//DeleteInDb();

const FindInDb = async () => {
  const product = mongoose.model("products", ProductSchema);
  let data = await product.find();
  console.log(data);
};

FindInDb();
