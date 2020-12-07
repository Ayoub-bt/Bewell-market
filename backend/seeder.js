import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import blog from "./data/blog.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import Blog from "./models/blogModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Blog.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUser = await User.insertMany(users);

    const adminUser = createdUser[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);
    await Blog.insertMany(blog);

    console.log("Data Imported a rojola!".green.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Blog.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed a rojola!".red.inverse);
    process.exit();
  } catch (err) {
    console.error(`${err}`.red.inverse);
    process.exit(1);
  }
};

process.argv[2] === "-d" ? destroyData() : importData();
