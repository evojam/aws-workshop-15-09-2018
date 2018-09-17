import { Handler } from 'aws-lambda'
import { log } from '../debug'
import { response, withCors } from '../http'
import { putImage } from '../image'

export const addFile: Handler = withCors(async event => {
  const bucket = process.env.PICTURES_BUCKET
  if (!bucket) {
    return response.internalServerError
  }

  try {
    const { image, filename } = JSON.parse(event.body)

    await putImage(bucket)(filename, image)

    return response.ok({ filename })
  } catch (error) {
    log(error)

    return response.badRequest({ cause: error })
  }

})
