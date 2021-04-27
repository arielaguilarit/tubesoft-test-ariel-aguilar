const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

// postgresql environment variables
const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_HOSTNAME,
  POSTGRES_DB,
  POSTGRES_PORT
} = process.env;

// Option 1: Passing a connection URI
//const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite
const sequelize = new Sequelize(`postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOSTNAME}:${POSTGRES_PORT}/${POSTGRES_DB}`) // Example for postgres
/*const sequelize = new Sequelize(
  POSTGRES_DB, 
  POSTGRES_USER, 
  POSTGRES_PASSWORD, 
  {
    dialect: 'postgres',
    pool: {
      max:5,
      min:0,
      require:30000,
      idle: 10000
    },
    logging:false
  }
);
module.exports = sequelize;
*/
sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });




  