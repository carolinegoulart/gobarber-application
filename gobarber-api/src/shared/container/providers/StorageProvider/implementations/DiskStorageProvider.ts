import fs from 'fs';
import path from 'path';
import uploadConfig from '@config/upload';
import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';

class DiskStorageProvider implements IStorageProvider {
  public async saveFile(file: string): Promise<string> {
    // move the files from the tmp to the uploads folder
    // fs.promises ensures the response is a promise (so that we can use await)
    await fs.promises.rename(
      path.resolve(uploadConfig.tmpFolder, file),
      path.resolve(uploadConfig.uploadsFolder, file)
    );

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    const filePath = path.resolve(uploadConfig.uploadsFolder, file);

    try {
      // checks if the file exists (fs.promises.stat gives file information,
      // and if it doesn't exist, throws an exception)
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    // if the file exists, then delete it
    await fs.promises.unlink(filePath);
  }
}

export default DiskStorageProvider;
