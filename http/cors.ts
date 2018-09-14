import { Handler } from 'aws-lambda'
import { Response, response as r } from './response'

export const withCors = (handler: Handler<any, Response>): Handler =>
  async (event, context, callback) => {
    const response: void | Response = await handler(event, context, callback)

    if (!response) {
      return r.internalServerError
    }

    return {
      ...response,
      headers: {
        ...response.headers,
        'Access-Control-Allow-Origin': '*',
      },
    }
  }
