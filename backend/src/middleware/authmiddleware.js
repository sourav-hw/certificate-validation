const authenticateApiKey = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            success: false,
            message: "Authorization token is required",
        });
    }

    const apiKey = authHeader.split(" ")[1];

    if (apiKey !== process.env.CERTIFICATE_API_KEY) {
        return res.status(401).json({
            success: false,
            message: "Invalid API key",
        });
    }

    next();
};

module.exports = authenticateApiKey;