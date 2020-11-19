import { Router } from 'express';

import multer from 'multer';
import uploadConfig from '@config/upload';

import UserController from '@modules/users/infra/http/controllers/UserController';
import UserAvatarController from '@modules/users/infra/http/controllers/UserAvatarController';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const userRouter = Router();
const userController = new UserController();
const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig);

userRouter.post('/', userController.create);

// middleware upload.single('avatar') saves the file in the /tmp folder
// the file needs to be sent in the 'avatar' field in the multipart file
userRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update
);

export default userRouter;
