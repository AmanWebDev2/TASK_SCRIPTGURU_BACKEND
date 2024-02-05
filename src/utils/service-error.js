class ServiceError extends Error {
    constructor(
        message = "Something went wrong",
        statusCode = 500,
        explaination = "service layer error"
    ) {
        super()
        this.name = "ServiceError"
        this.message = message;
        this.statusCode = statusCode;
        this.explaination = explaination;
    }
}

module.exports = ServiceError;