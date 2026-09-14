const express = require("express");
const rateLimit = require("express-rate-limit");

const {
    createCertificate,
    getCertificate,
} = require("../controllers/certificateController");

const authenticateApiKey = require("../middleware/authmiddleware");
const validate = require("../middleware/validateMiddleware");
const certificateSchema = require("../validators/certificateValidators");

const router = express.Router();

const createLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    message: {
        success: false,
        message: "Too many certificate creation requests. Please try again later.",
    },
});

const verifyLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: {
        success: false,
        message: "Too many verification requests. Please try again later.",
    },
});

router.post(
    "/",
    createLimiter,
    authenticateApiKey,
    validate(certificateSchema),
    createCertificate
);

router.get(
    "/:certificateId",
    verifyLimiter,
    getCertificate
);

module.exports = router;