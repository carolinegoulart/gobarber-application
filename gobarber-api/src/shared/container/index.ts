import { container } from 'tsyringe';

// imports the others container's registration
import '@modules/users/providers';
import '@shared/container/providers';

import IAppointmentRepository from '@modules/appointments/repositories/IAppointmentRepository';
import AppointmentRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentRepository';

import IUserRepository from '@modules/users/repositories/IUserRepository';
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository';

container.registerSingleton<IAppointmentRepository>(
  'AppointmentRepository',
  AppointmentRepository
);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
