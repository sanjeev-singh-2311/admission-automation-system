import { Router } from "express"
import {
    add_new_course,
    delete_course_by_id,
    get_all_courses,
    get_course_by_id,
    get_course_by_name,
    update_course_by_id
} from "../internals/courses-internals"

export default function set_course_routes_v1(router: Router) {
    // GET all course details
    router.get("/courses", get_all_courses)

    // GET all courses from a search term
    // the query param `q` is used for the search term
    router.get("/courses/search", () => { })

    // GET course detail by course name
    router.get("/courses/name/:course_name", get_course_by_name)

    // GET course detail by id
    router.get("/courses/id/:id", get_course_by_id)

    // CREATE a new course
    router.post("/courses", add_new_course)

    // UPDATE a course by id
    router.put("/courses/:id", update_course_by_id)

    // DELETE a course by id
    router.delete("/courses/:id", delete_course_by_id)
}
