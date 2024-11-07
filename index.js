const express = require("express");
const cors = require("cors");

const app = express();
const port = 5010;

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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
