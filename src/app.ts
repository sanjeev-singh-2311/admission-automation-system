import express, { json } from "express"
import setup_v1_router from "./v1/app-router"

const app: express.Express = express()
const PORT = 5729

app.use(json())
setup_v1_router(app)

app.listen(PORT, "0.0.0.0", () => {
    console.log(`app listening to port ${PORT}`)
})
