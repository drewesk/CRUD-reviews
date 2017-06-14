// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/gReviews'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-gReviews'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
