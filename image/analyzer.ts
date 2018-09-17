import { Rekognition } from 'aws-sdk'
import { promisify } from 'util'
import { log } from '../debug'

const rek = new Rekognition()

const detectLabelsAsync = promisify(rek.detectLabels).bind(rek)
const detectFacesAsync = promisify(rek.detectFaces).bind(rek)

const getDefaultParams = (bucket: string, image: string) => ({
  Image: {
    S3Object: {
      Bucket: bucket,
      Name: image,
    },
  },
})

const detectLabels = (bucket: string) => async (image: string) => {
  const params = {
    ...getDefaultParams(bucket, image),
    MaxLabels: 10,
    MinConfidence: 50,
  }

  log(`Analyzing file: https://s3.amazonaws.com/${bucket}/${image}`)

  try {
    const { Labels: labels } = await detectLabelsAsync(params)

    return labels
  } catch (err) {
    throw new Error(err)
  }
}

const detectFaces = (bucket: string) => async (image: string) => {
  const params = getDefaultParams(bucket, image)

  log(`Analyzing file: https://s3.amazonaws.com/${bucket}/${image}`)

  try {
    const { Labels: labels } = await detectFacesAsync(params)

    return labels
  } catch (err) {
    throw new Error(err)
  }
}

export const imageAnalyzer = (bucket: string) => {
  return {
    detectLabels: detectLabels(bucket),
    detectFaces: detectFaces(bucket),
  }
}
