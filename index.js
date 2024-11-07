const cors = require("cors");
const express = require("express");
const port = process.env.PORT || 3001;

const app = express();

let isRegisterEnabled = true; // Variable to keep track of the status of the /api/register endpoint

app.use(cors());
app.use(express.json());

// Endpoint to enable/disable /api/register
app.post("/api/enabled", (req, res) => {
  const { command } = req.body;
  if (command === "true") {
    isRegisterEnabled = true;
    res.json({ message: "/api/register is now enabled" });
  } else if (command === "false") {
    isRegisterEnabled = false;
    res.json({ message: "/api/register is now disabled" });
  } else {
    res.status(400).json({ message: "Invalid command. Use 'true' or 'false'." });
  }
});

// /api/register endpoint
app.post("/api/register", (req, res) => {
  if (!isRegisterEnabled) {
    return res.status(403).json({ message: "/api/register is currently disabled" });
  }

  const { email } = req.body;
  if (email) {
    res.json({ message: `${email} is now registered` });
  } else {
    res.status(400).json({ message: "Invalid email" });
  }
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

