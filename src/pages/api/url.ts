import { getObjectSignedUrl } from '@app/backend/shared/aws/s3'
import { NextApiHandler } from 'next'

const getS3Url: NextApiHandler = async (req, res) => {
  const paths = req.body.paths
  const urls: string[] = []

  for (const path of paths) urls.push(await getObjectSignedUrl(path))

  res.status(200).json({ urls })
}

export default getS3Url
