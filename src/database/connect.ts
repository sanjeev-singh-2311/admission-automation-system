import config from "@src/config/config"
import { Db, MongoClient } from "mongodb"

const user_name = config("MONGO_USER")
const password = config("MONGO_PASSWORD")
const db_port = config("MONGP_PORT")
const uri = `mongodb://${user_name}:${password}@localhost:${db_port}`

const pool = new MongoClient(uri, {
    maxConnecting: 20,
    appName: "admission-automation-fsdcse",
    maxIdleTimeMS: 3 * 1000
})

export default async function get_connection(db_name: string): Promise<Db> {
    try {
        const connector = await pool.connect()
        const db = connector.db(db_name)
        return db
    } catch (e) {
        throw new Error("Error frfr")
    }
}
