var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'yeoman-express'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/yeoman-express-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'yeoman-express'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/yeoman-express-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'yeoman-express'
    },
    port: process.env.PORT || 3000,
    db: 'mysql://localhost/yeoman-express-production'
  }
};

module.exports = config[env];
