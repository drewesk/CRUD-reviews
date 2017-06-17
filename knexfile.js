module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/crud-reviews'
  },

  production: {
  client: 'postgresql',
    connection: process.env.DATABASE_URL
  }

};
