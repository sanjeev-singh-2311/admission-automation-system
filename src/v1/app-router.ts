import express, { Express } from "express"

export default function setup_v1_router(app: Express, mount_point: string = "/v1") {
    const v1_router = express.Router()

    v1_router.get("/hello", (_, res) => {
        res.status(200).send("Hello from v1 router")
    })

    app.use(mount_point, v1_router)
}
