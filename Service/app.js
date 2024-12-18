import express from "express";
import cors from "cors";
import multer from "multer";

const app = express();

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
app.get("/", (req, res) => {
  res.send("Root Proxy on port 3001");
});

app.post("/create", (req, res) => {
  // console.log("Request: ", req.body);
  res.json(req.body);
});

app.post("/upload", upload.single("file"), (req, res) => {
  // console.log("Request: ", req.file);
  res.json({ message: "File Received", data: req.file,text: req.body });
});

app.post("/form", upload.any(), (req, res) => {
  // console.log("Request: ", req.body);

  res.json({ message: "FormData Received", data: req.body });
});

app.listen(3001, () => {
  console.log("Gateway is running on port 3001");
});
