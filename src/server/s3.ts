import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import dotenv from 'dotenv'

dotenv.config()

const s3Data = {
  name: process.env.S3_NAME || '',
  region: process.env.S3_REGION || '',
  accessKey: process.env.IAM_ACCESS_KEY || '',
  accessSecretKey: process.env.IAM_SECRET_KEY || ''
}

const s3Client = new S3Client({
  region: s3Data.region,
  credentials: {
    accessKeyId: s3Data.accessKey,
    secretAccessKey: s3Data.accessSecretKey
  }
})

export const getObjectSignedUrl = async (fileName: string) => {
  const params = { Key: fileName, Bucket: s3Data.name }

  const seconds = 100
  const command = new GetObjectCommand(params)

  const url = await getSignedUrl(s3Client, command, { expiresIn: seconds })

  return url
}
