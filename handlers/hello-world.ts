import { Handler } from 'aws-lambda'
import { log } from '../debug'
import { response, withCors } from '../http'

export const helloWorld: Handler = withCors(async event => {
  try {
    const { name } = JSON.parse(event.body)

    if (!name) {
      return response.badRequest({ cause: 'Property name is missing' })
    }

    return response.ok({ greeting: `Hello ${name}!` })
  } catch (error) {
    log(error)

    return response.internalServerError
  }
})
