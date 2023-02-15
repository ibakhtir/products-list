import dotenv from "dotenv"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import chalk from "chalk"

import routes from "./routes/root.routes"

// APP SETUP

dotenv.config()

const PORT = process.env.PORT ?? 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use("/api", routes)

// MONGOOSE SETUP

mongoose.set("strictQuery", false)

mongoose
  .connect(`${process.env.MONGODB_URI}`)
  .then(() => {
    console.log(chalk.magenta("MongoDB connected"))

    app.listen(PORT, () =>
      console.log(chalk.magenta(`Server has been started on port ${PORT}`))
    )
  })
  .catch((error) => {
    console.log(chalk.red(error.message))
    process.exit(1)
  })
