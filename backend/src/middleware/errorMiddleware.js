const errorHandler = (err, req, res, next) => {
    console.error(err);

    // Duplicate key error from MongoDB
    if (err.code === 11000) {
        const field = Object.keys(err.keyPattern || {})[0];

        let message = "Duplicate value already exists";

        if (field === "certificateId") {
            message = "Certificate ID already exists";
        }

        if (field === "email") {
            message = "Email already exists";
        }

        return res.status(409).json({
            success: false,
            message,
        });
    }

    res.status(500).json({
        success: false,
        message: "Internal server error",
    });
};

module.exports = errorHandler;