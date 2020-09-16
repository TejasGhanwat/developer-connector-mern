const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect database

connectDB();

// Init Middleware

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API running"));

//Define Routes

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profiles", require("./routes/api/profiles"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.port || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
