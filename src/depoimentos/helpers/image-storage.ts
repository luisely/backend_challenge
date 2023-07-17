import { UnsupportedMediaTypeException } from '@nestjs/common';
import { diskStorage } from 'multer';

export const saveToStorage = {
  storage: diskStorage({
    destination: 'tmp/images',
    filename: (req, file, cb) => {
      const fileNameSplit = file.originalname.split('.');
      const fileExt = fileNameSplit[fileNameSplit.length - 1];
      cb(null, `${Date.now()}.${fileExt}`);
    },
  }),
  fileFilter: (req, file, cb) => {
    const imageMimetypeRegex = /^(image\/jpeg|image\/png)$/;
    // console.log(imageMimetypeRegex.test(file.mimetype));
    if (imageMimetypeRegex.test(file.mimetype) === false)
      cb(
        new UnsupportedMediaTypeException(
          'Missing field file to upload !. Please try again !',
        ),
        false,
      );
    else cb(null, true);
  },
};
