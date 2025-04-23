import express, { Express } from "express"
import set_course_routes_v1 from "./routes/courses-routes"

export default function setup_v1_router(app: Express, mount_point: string = "/v1") {
    const v1_router = express.Router()

    v1_router.get("/hello", (_, res) => {
        res.status(200).send("Hello from v1 router")
    })

    set_course_routes_v1(v1_router)

    app.use(mount_point, v1_router)
}
