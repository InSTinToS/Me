import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.DB_URI || '')

export const getDBConnection = async () => await client.connect()
