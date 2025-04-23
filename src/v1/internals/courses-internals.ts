import get_connection from "../../database/connect"
import { Course, CourseWithID } from "../../schema/courses-schema"
import { Request, Response } from "express"
import { WithId } from "mongodb"

export async function get_all_courses(_: Request, res: Response) {
    try {
        const { db, client } = await get_connection("admission-automation")
        const result_cur = db.collection("courses").find()

        let result: CourseWithID[] = []
        for await (const r of result_cur) {
            result.push(r as WithId<Document> & CourseWithID);
        }

        client.close()
        res.status(200).json({
            data: result,
            message: "Data Fetch Success"
        })

        return
    } catch (e) {
        res.status(400).json({
            data: [],
            message: e
        })
        return
    }

}

export async function add_new_course(req: Request, res: Response) {
    try {
        const { db, client } = await get_connection("admission-automation")
        const to_insert: Course = req.body
        const inserted_res = await db.collection("courses").insertOne(to_insert)

        client.close()
        res.status(200).json({
            data: { _id: inserted_res.insertedId, ...to_insert },
            message: "Data added successfully"
        })
        return
    } catch (e) {
        res.status(400).json({
            data: [],
            message: e
        })
        return
    }
}
