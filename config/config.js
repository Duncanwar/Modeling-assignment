require("dotenv").config();

module.exports ={
  development: {
    url: process.env.DEV_DATABASE_URL,
    version: "true",
    dialect: "postgres",
    logging: false,
  },
  "test": {
    "url": process.env.TEST_DATABASE_URL,
    "version": "true",
    "dialect": "postgres"
  },
  "production": {
    "url": process.env.PROD_DATABASE_URL,
    "version": "true",
    "dialect": "postgres"
  }
}
