const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected successfully.");
  })
  .catch((err) => {
    console.log("Error occur: " + err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.blogs = require("./models/blog.model")(sequelize, DataTypes);

// logic to migrate model
sequelize.sync({ alter: false }).then(() => {
  console.log("Migration complete.");
});

module.exports = db;
