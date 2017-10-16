'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/[DATABASE NAME]'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/[DATABASE NAME]-test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
