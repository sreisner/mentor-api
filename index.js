const express = require("express");
const cors = require("cors");
const mentors = require("./mentors");

const app = express();

app.use(
  cors({
    origin: true
  })
);

app.get("/mentors", (req, res) => {
  res.json(mentors);
});

const port = process.env.PORT || process.argv[2] || 3001;
app.listen(port, () => console.log(`Running on port ${port}`));
