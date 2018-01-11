const authController = require('./auth.controller');
const { Router } = require('express');

const attachTo = (app, data) => {
  const router = new Router();

  const routerPrefix = '/auth';
  const controller = authController.init(app, data);

  router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
      const token = await controller.login({ username, password });
      res.json(token);
    } catch ({ statusCode, errorMessage }) {
      res.status(statusCode).json({ message: errorMessage });
    }
  });

  app.use(routerPrefix, router);
};

module.exports = { attachTo };
