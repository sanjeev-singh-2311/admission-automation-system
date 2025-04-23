import dotenv from "dotenv"

export default function config(key: string): string {
    dotenv.config({
        path: "@src/.env"
    })
    return process.env[key] || ""
}
