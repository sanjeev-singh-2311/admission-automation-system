import get_connection from "../../database/connect"
import { Course, CourseWithID } from "../../schema/courses-schema"
import { Request, Response } from "express"
import { ObjectId, WithId } from "mongodb"

export async function get_all_courses(_: Request, res: Response) {
    try {
        const { db, client } = await get_connection("admission-automation")
        const result: CourseWithID[] = await db.collection("courses").find().toArray() as (WithId<Document> & CourseWithID)[]

        client.close()
        res.status(200).json({
            data: result,
            message: "Data Fetch Success"
        })

        return
    } catch (e) {
        res.status(400).json({
            data: [],
            message: "" + e
        })
        return
    }

}

export async function get_course_by_id(req: Request, res: Response) {
    try {
        const { db, client } = await get_connection("admission-automation")
        const id: string = req.params["id"]

        const result = await db.collection("courses").findOne({ _id: new ObjectId(id) })

        if (result === null) {
            res.status(404).json({
                data: {},
                message: "Data with this ID does not exist"
            })
            return
        }
        res.status(200).json({
            data: result as WithId<Document> & CourseWithID,
            message: "Data fetched successfully"
        })

        client.close()
        return
    } catch (e) {
        res.status(404).json({
            data: {},
            message: "" + e
        })
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
