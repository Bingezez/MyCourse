class ApiError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.status = 404;
    }
}

class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.status = 400;
    }
}

module.exports = {
    ApiError, NotFoundError, BadRequestError
};
