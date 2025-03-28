const express = require("express");
const config = require("config");
const mainRoutes = require("./routes/index.routes");
const sequelize = require("./config/db")


const PORT = config.get("port") || 3030;

const app = express();
app.use(express.json()); // parse-body

app.use(express.json());

app.use("/api", mainRoutes);

async function start() {
  try {
    await sequelize.authenticate()
    await sequelize.sync({ alter: true })
    app.listen(PORT, () => {
      console.log(`Server started at: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
