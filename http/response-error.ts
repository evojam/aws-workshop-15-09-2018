// https://serverless.com/framework/docs/providers/aws/events/apigateway#available-status-codes
export enum ResponseError {
  BadRequest = 'Bad Request',
  Conflict = 'Conflict',
  Unauthorized = 'Unauthorized',
  Forbidden = 'Forbidden',
  NotFound = 'Not Found',
  UnprocessableEntity = 'Unprocessable Entity',
  InternalServerError = 'Internal server Error',
  BadGateway = 'Bad Gateway',
  GatewayTimeout = 'Gateway Timeout',
}
