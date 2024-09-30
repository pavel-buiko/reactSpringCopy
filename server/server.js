import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use("/img", express.static("img"));
app.use(express.json());

app.get("/api/test", (_, res) => {
  res.json({ message: "Server connected to frontend" });
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "1234") {
    res.status(200).json({ username: username, password: password });
  } else {
    res.status(401).json({ message: "invalid credentials" });
  }
});

// app.get("/api/cards", (req, res) => {
//   const searchTerm = req.body;
//   const filteredCards = projectItems.filter((val) => {
//     val.description.concat(val.title).toLocaleLowerCase() ===
//       searchTerm.toLocaleLowerCase();
//   });

//   res.json(filteredCards);
// });

app.listen(port, () => console.log(`Server is running on port ${port}`));
