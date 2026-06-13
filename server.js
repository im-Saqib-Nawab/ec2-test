const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

app.get("/api/users", (req, res) => {
  res.json({
    success: true,
    message: "Users fetched successfully",
    data: [
      { id: 1, name: "Ali" },
      { id: 2, name: "Ahmed" },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
