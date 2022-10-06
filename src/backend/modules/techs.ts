import { ITech } from '@app/types/api/tech.types'

import { MongoClient } from 'mongodb'

export const getTechs = async (dbConnection: MongoClient) => {
  const techs = await dbConnection
    .db()
    .collection<ITech>('Techs')
    .find()
    .toArray()

  return JSON.stringify(techs)
}
