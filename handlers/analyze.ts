import { Handler } from 'aws-lambda'
import { log } from '../debug'
import { response, withCors } from '../http'
import { imageAnalyzer } from '../image'

export const analyze: Handler = withCors(async event => {
  const bucket = process.env.PICTURES_BUCKET
  if (!bucket) {
    return response.internalServerError
  }

  try {
    const { filename } = event.queryStringParameters
    const analyzer = imageAnalyzer(bucket)

    const faces = await analyzer.detectFaces(filename)
    const labels = await analyzer.detectLabels(filename)

    return response.ok({ faces, labels })
  } catch (error) {
    log(error)

    return response.notFound()
  }
})
