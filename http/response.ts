import { StatusCode } from './status-code'

export type Response = {
  statusCode: StatusCode,
  headers?: Headers,
  body?: string,
}

const ok = <T>(body?: T): Response => ({ statusCode: StatusCode.Ok, body: JSON.stringify(body) })
const created = <T>(body?: T): Response => ({ statusCode: StatusCode.Created, body: JSON.stringify(body) })
const noContent: Response = { statusCode: StatusCode.NoContent }
const badRequest = <T>(body?: T): Response => ({ statusCode: StatusCode.BadRequest, body: JSON.stringify(body) })
const notFound = <T>(body?: T): Response => ({ statusCode: StatusCode.NotFound, body: JSON.stringify(body) })
const conflict: Response = { statusCode: StatusCode.Conflict }
const internalServerError: Response = { statusCode: StatusCode.InternalServerError }

export const response = {
  ok,
  created,
  noContent,
  badRequest,
  notFound,
  conflict,
  internalServerError,
}
