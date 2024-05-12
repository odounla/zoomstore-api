const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api");

class UnauthorizedError extends CustomAPIError {
  constructor(messasge) {
    super(messasge);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}

module.exports = UnauthorizedError;
