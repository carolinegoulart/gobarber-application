import multer from 'multer';
import crypto from 'crypto';
import path from 'path';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  tmpFolder: tmpFolder,
  uploadsFolder: path.resolve(tmpFolder, 'uploads'),

  // all the files go to the tmp folder
  storage: multer.diskStorage({
    destination: tmpFolder,

    // rename the file
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
