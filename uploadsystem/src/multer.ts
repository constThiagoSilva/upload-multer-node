import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: (request, file, callback) => {
    callback(null, path.resolve("uploads"));
  },
  filename: (request, file, callback) => {
    const timestamp = new Date().getTime();

    callback(
      null,
      `${file.originalname}_${timestamp}_${path.extname(file.originalname)}`
    );
  },
});

export const upload = multer({ storage });
