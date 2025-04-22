export interface Course {
    name: string
    cost: number
}

// The same thing but with the MongoDB UUID field
export interface CourseWithID extends Course {
    _id: string
}
