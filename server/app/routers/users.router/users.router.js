const usersController = require('./users.controller');
const { getStatusCode } = require('./../../../utils');
const { Router } = require('express');
const { BAD_REQUEST_ERROR_MESSAGE } = require('./users.constants');
const { requireAuthentication } = require('./../../authentication');

const usersRouter = new Router();

const createdStatusCode = getStatusCode('created');
const badRequestStatusCode = getStatusCode('badRequest');
const okStatusCode = getStatusCode('ok');

const attachTo = (app, data) => {
  const controller = usersController.init(data);
  const routerPrefix = '/users';

  usersRouter.post('/register', async (req, res) => {
    const user = req.body;
    controller
      .createNewUserRx(user)
      .subscribe(
        (createdUser) => { res.status(createdStatusCode).json(createdUser); },
        ({ statusCode = badRequestStatusCode, errorMessage = BAD_REQUEST_ERROR_MESSAGE }) => {
          res.status(statusCode).json({ errorMessage });
        },
      );

    // try {
    //   const createdUser = await controller.createNewUser(user);
    //   res.status(createdStatusCode).json(createdUser);
    // } catch ({ statusCode = badRequestStatusCode, message = BAD_REQUEST_ERROR_MESSAGE }) {
    //   res.status(statusCode).json({ errorMessage: message });
    // }
  });

  usersRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;
    controller
      .loginExistingUserRx({ username, password })
      .subscribe(
        (createdUser) => { res.status(createdStatusCode).json(createdUser); },
        ({ statusCode = badRequestStatusCode, errorMessage = BAD_REQUEST_ERROR_MESSAGE }) => {
          res.status(statusCode).json({ errorMessage });
        },
      );

    // try {
    //   const token = await controller.loginExistingUser({ username, password });
    //   res.status(okStatusCode).json(token);
    // } catch ({ statusCode = badRequestStatusCode, errorMessage = BAD_REQUEST_ERROR_MESSAGE }) {
    //   res.status(statusCode).json({ errorMessage });
    // }
  });

  usersRouter.put('/changepassword', requireAuthentication(), async (req, res) => {
    const userId = req.user.id;
    const { oldPassword, newPassword } = req.body;

    controller
      .changeExistingUsersPasswordRx({ userId, oldPassword, newPassword })
      .subscribe(
        () => { res.sendStatus(okStatusCode); },
        ({ statusCode = badRequestStatusCode, errorMessage = BAD_REQUEST_ERROR_MESSAGE }) => {
          res.status(statusCode).json({ errorMessage });
        },
      );

    // try {
    //   await controller.changeExistingUsersPassword({
    //     userId, oldPassword, newPassword,
    //   });

    //   res.sendStatus(okStatusCode);
    // } catch ({ statusCode = badRequestStatusCode, errorMessage = BAD_REQUEST_ERROR_MESSAGE }) {
    //   res.status(statusCode).json({ errorMessage });
    // }
  });

  app.use(routerPrefix, usersRouter);
};

module.exports = { attachTo };
