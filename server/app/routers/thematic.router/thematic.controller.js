/* eslint-disable */
const { getStatusCode } = require('./../../../utils');

const badRequest = getStatusCode('badRequest');

const init = (app, data) => {
  const topicContorller = Object.create(null);

  topicContorller.create = (topic) => new Promise((resolve, reject) => {
    data.topics.create(topic)
      .then(succ => {})
      .catch(fail => {});
  });
};

module.exports = { init };