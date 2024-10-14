const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import routes
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const taskRoute = require("./routes/task");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/employee")
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log(err))

// Routes
app.use("/auth", authRoute)
app.use("/user", userRoute)
app.use("/task", taskRoute)

app.listen(3001, () => {
    console.log("Server is running in port 3001")
})
