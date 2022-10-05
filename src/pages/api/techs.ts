import { getDBConnection } from '@app/services/db'

import { ITech } from '@app/types/api/tech.types'

export const getTechs = async () => {
  const dbConnection = await getDBConnection()

  const techs = await dbConnection
    .db()
    .collection<ITech>('Techs')
    .find()
    .toArray()

  return JSON.stringify(techs)
}
