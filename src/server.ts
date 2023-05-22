import mongoose from "mongoose";
import app from "./app";

const port: number = 5000;

const conectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practise-mongoose");
    console.log("MongoDB Connect Successfully");

    // App listening
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("Failed to connect Database", error.message);
  }
};

conectDB();
