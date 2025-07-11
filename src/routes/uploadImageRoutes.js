const express = require("express");
const multer = require("multer");
const supabase = require("../config/supabaseClient");
const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/upload/:bucket", upload.single("file"), async (req, res) => {
  const { bucket } = req.params;
  const file = req.file;

  if (!file) return res.status(400).json({ error: "No file uploaded" });

  const fileExt = file.originalname.split(".").pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `${fileName}`;

  console.log("Uploading file to bucket:", bucket);
  console.log("File name:", file.originalname);
  console.log("Size:", file.size, "bytes");
  console.log("Mime type:", file.mimetype);

  const { error } = await supabase.storage
    .from(bucket)
    .upload(filePath, file.buffer, {
      contentType: file.mimetype,
      upsert: true,
    });

  if (error) {
    console.error("Upload failed:", error.message || error);
    return res.status(500).json({ error: error.message || "Upload failed" });
  }

  const publicUrl = `${process.env.SUPABASE_URL}/storage/v1/object/public/${bucket}/${filePath}`;
  console.log("Upload successful, public URL:", publicUrl);
  res.json({ url: publicUrl });
});

module.exports = router;
