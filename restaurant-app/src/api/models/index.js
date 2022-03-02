// Import sequelize
const { Sequelize } = require("sequelize");

// DB Connection Configuration
process.env.HEROKU_POSTGRESQL_BRONZE_URL =
  "postgres://odcemqtnguqwtk:641a00bfa60ffadd66e232fa673a245abe2ddbf690d2037a7de6b59b9ca4f837@ec2-52-201-106-191.compute-1.amazonaws.com:5432/d1j0chnogdc8bp";
const sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_BRONZE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  port: 5432,
  host: "ec2-52-201-106-191.compute-1.amazonaws.com",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});
// Test connection function
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    return true;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    return false;
  }
}



testConnection()
