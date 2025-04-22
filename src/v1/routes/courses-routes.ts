import { Router } from "express"

export default function set_course_routes_v1(router: Router) {
    // GET all course details
    router.get("/courses", () => { })

    // GET all courses from a search term
    // the query param `q` is used for the search term
    router.get("/courses/search", () => { })

    // GET course detail by course name
    router.get("/courses/name/:courseName", () => { })

    // GET course detail by id
    router.get("/courses/id/:id", () => { })

    // CREATE a new course
    router.post("/courses", () => { })

    // UPDATE a course by id
    router.put("/courses/:id", () => { })
}
