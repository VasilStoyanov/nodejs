const USER_MODEL_CONSTANTS = Object.create(null);

USER_MODEL_CONSTANTS.USERS_COLLECTION_NAME = 'users';
USER_MODEL_CONSTANTS.USERS_USERNAME_COLUMN_NAME = 'username';

USER_MODEL_CONSTANTS.SALT_MAX_LENGTH = 40;
USER_MODEL_CONSTANTS.SALT_MIN_LENGTH = 10;

USER_MODEL_CONSTANTS.USER_EMAIL_MAX_LENGTH = 40;
USER_MODEL_CONSTANTS.USER_EMAIL_MIN_LENGTH = 5;

USER_MODEL_CONSTANTS.USER_PASSWORD_MAX_LENGTH = 40;
USER_MODEL_CONSTANTS.USER_PASSWORD_MIN_LENGTH = 6;

USER_MODEL_CONSTANTS.USERNAME_MAX_LENGTH = 30;
USER_MODEL_CONSTANTS.USERNAME_MIN_LENGTH = 3;

module.exports = USER_MODEL_CONSTANTS;
