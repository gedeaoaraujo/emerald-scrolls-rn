import { type SQLiteDatabase } from 'expo-sqlite';

export async function migrateDbIfNeeded(db: SQLiteDatabase) {
  const DATABASE_VERSION = 1;

  let {
    user_version: currentDbVersion
  } = await db.getFirstAsync<any>(
    'PRAGMA user_version'
  );

  if (currentDbVersion >= DATABASE_VERSION) {
    return;
  }

  if (currentDbVersion === 0) {
    migrateV1(db)
    currentDbVersion = 1;
  }

  await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
}

async function migrateV1(db: SQLiteDatabase){
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS scroll(
      id INTEGER PRIMARY KEY NOT NULL,
      title TEXT NOT NULL,
      date TEXT NOT NULL,
      text TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS configs(
      id INTEGER PRIMARY KEY NOT NULL,
      key TEXT NOT NULL,
      value TEXT NOT NULL
    );
    INSERT INTO configs(key, value) VALUES ('theme', 'light');
    INSERT INTO configs(key, value) VALUES ('language', 'enUS');
  `.trim());
}