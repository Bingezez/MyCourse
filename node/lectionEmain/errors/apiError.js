const code = require('./error.codes');

class ApiError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.status = code.NOT_FOUND;
    }
}

class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.status = code.BAD_REQUEST;
    }
}

class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.status = code.UNAUTHORIZED;
    }
}

class ForbiddenError extends Error {
    constructor(message) {
        super(message);
        this.status = code.FORBIDDEN;
    }
}

class ConflictError extends Error {
    constructor(message) {
        super(message);
        this.status = code.FORBIDDEN;
    }
}

class ServerError extends Error {
    constructor(message) {
        super(message);
        this.status = code.SERVER_ERROR;
    }
}

module.exports = {
    ApiError,
    NotFoundError,
    BadRequestError,
    UnauthorizedError,
    ForbiddenError,
    ConflictError,
    ServerError
};
