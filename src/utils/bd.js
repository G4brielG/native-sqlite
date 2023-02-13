import {enablePromise} from 'react-native-sqlite-storage'

enablePromise(true)

const DATABASE_NAME = 'iapa.db'

export const getConexion = async () => {
    return db = await openDatabase({name: DATABASE_NAME, location: 'default'})
}

export const createTables = async (db) => {
    const query = 'CREATE TABLE IF NOT EXIST tipo_teniencia(id INTEGER PRIMARY KEY AUTOINCREMENT, nombre_tipo VARCHAR(30))'
    await db.executeSql(query)
}

export const initDataBase = async () => {
    const db = await getConexion()
    await createTables(db)
    db.close()
}

export const insertTipoTeniencia = async(db, nombre) => {
    const query = `INSERT INTO tipo_teniencia (nombre) values ('${nombre}')`
    await db.executeSql(query)
}