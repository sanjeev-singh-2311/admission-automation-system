import dotenv from "dotenv"

dotenv.config()

export default function config(key: string): string {
    return process.env[key] || ""
}
