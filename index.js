const cors = require("cors");
const express = require("express");
const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/register", (req, res) => {
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

