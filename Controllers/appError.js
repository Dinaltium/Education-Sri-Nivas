class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true; // This is to differentiate operational errors from programming errors.
        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = AppError;
