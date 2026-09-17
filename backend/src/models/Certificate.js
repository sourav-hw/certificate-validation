const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema(
    {
        studentName: {
            type: String,
            required: true,
            trim: true,
        },

        studentId: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        course: {
            type: String,
            required: true,
            trim: true,
        },

        batch: {
            type: String,
            required: true,
            trim: true,
        },

        certificateId: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },

        issuedDate: {
            type: Date,
            required: true,
        },

        branch: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Certificate", certificateSchema);