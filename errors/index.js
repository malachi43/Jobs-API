const CustomErrorAPI = require('./customError')
const BadRequestError = require('./badRequestError')
const NotFoundError = require('./notFoundError')
const UnauthenticatedError = require('./unauthenticated')

module.exports = {
    CustomErrorAPI,
    BadRequestError,
    NotFoundError,
    UnauthenticatedError
}