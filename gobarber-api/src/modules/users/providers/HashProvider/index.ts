import { container } from 'tsyringe';

import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';
import BCryptHashProvider from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider';

// we basically say: "everytime I call an instance of 'HashProvider',
// provide me an instance of BCryptHashProvider"
container.registerSingleton<IHashProvider>('HashProvider', BCryptHashProvider);
