import express from "express";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({});

let upload = multer({
  storage,
});

router.post("/uploud", upload.single("myFile"), (req, res) => {
  try {
    if (!req.file)
      return res.status(400).json({ message: " hey bro! we need the file" });
    console.log(req.file);
  } catch (error) {
    console.log(Error);
    res.status(500).json({ message: " server error " });
  }
});

export default router;
