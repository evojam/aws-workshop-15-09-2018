import { S3 } from 'aws-sdk'
import { promisify } from 'util'

const s3 = new S3()

const putObjectAsync = promisify(s3.putObject).bind(s3)

export const putImage = (bucket: string) => async (filename: string, image: string) => await putObjectAsync({
  Bucket: bucket,
  Key: filename,
  Body: Buffer.from(image, 'base64'),
})
