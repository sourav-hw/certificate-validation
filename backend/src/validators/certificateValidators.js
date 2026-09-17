const { z } = require("zod");

const certificateSchema = z.object({
    studentName: z.string().trim().min(2, "Student name is required"),

    studentId: z
        .string()
        .trim()
        .min(1, "Student ID is required"),

    course: z.string().trim().min(2, "Course is required"),

    batch: z.string().trim().min(1, "Batch is required"),

    certificateId: z.string().trim().min(1, "Certificate ID is required"),

    issuedDate: z.coerce.date(),

    branch: z.string().trim().optional(),
});

module.exports = certificateSchema;