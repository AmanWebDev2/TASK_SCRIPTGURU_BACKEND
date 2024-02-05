class ValidationError extends Error {
    constructor(error) {
        super()
        let explainations = [];
         Object.values(error.errors).forEach((err)=>{
            explainations.push(err.message)
        })
        this.name = "ValidationError"
        this.message = error.message || "Not able to validate the data sent in the request",
        this.explainations = explainations
        this.statusCode = 400
    }
}

module.exports = ValidationError;