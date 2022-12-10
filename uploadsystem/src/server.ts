import expres, { response } from "express";
import { upload } from "./multer";

const app = expres();

app.post("/upload", upload.single("file"), (request, response) => {
  return response.json(request.file?.filename);
});

app.listen(8090 || process.env.PORT, () => console.log("Server running"));
