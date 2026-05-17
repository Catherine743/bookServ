// const multer = require('multer')

// const storage = multer.diskStorage({
//     destination:(req, file, callback) => {
//         callback(null, './uploads')
//     },
//     filename:(req, file, callback) => {
//         callback(null, `Image-${Date.now()}-${file.originalname}`)
//     }
// })

// const fileFilter = (req, file, callback) => {
//     if(file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png' || file.mimetype == 'image/webp' ) {
//         callback(null, true)
//     }
//     else{
//         callback(null, false)
//     }
// }

// const multerMiddleware = multer({
//     storage, fileFilter
// })

// module.exports = multerMiddleware

const multer = require("multer");
const cloudinary = require("../config/cloudinaryConfig");

const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "BookStore",
    resource_type: "auto",
    public_id: (req, file) =>
      `${Date.now()}-${file.originalname}`,
  },
});

const fileFilter = (req, file, callback) => {

  const allowedTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
    "application/pdf",
  ];

  if (allowedTypes.includes(file.mimetype)) {
    callback(null, true);
  } else {
    callback(new Error("Unsupported file"), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;