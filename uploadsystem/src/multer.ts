import multer from "multer";

const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, 'uploads')
    },
    filename: (request, file, callback) => {
        const timestamp = new Date().getTime()

        callback(null, `${timestamp}_${file.filename}`)
    }
})

export const upload = multer({storage})