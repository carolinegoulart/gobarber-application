import { container } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import DiskStorageProvider from '@shared/container/providers/StorageProvider/implementations/DiskStorageProvider';

// we basically say: "everytime I call an instance of 'StorageProvider',
// provide me an instance of DiskStorageProvider"
container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider
);
