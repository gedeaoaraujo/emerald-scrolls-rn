import * as SQLite from 'expo-sqlite'

export async function getThemeConfig(): Promise<string|null> {
  try {
    const db = await SQLite.openDatabaseAsync('emerald.db')
    const res = await db.getFirstAsync<{ value: string }>(
      "SELECT value FROM configs WHERE key = 'theme'"
    )
    return res?.value ?? null
  } catch (error) {
    console.log('Error: ', error);
    throw error;
  }
}

export async function setThemeConfig(value: string) {
  try {
    const db = await SQLite.openDatabaseAsync('emerald.db')
    await db.runAsync(
      "UPDATE configs SET value = ? WHERE key = 'theme'", value
    )
  } catch (error) {
    console.log('Error: ', error);
    throw error;
  }
}

export async function getLanguageConfig(): Promise<string|null> {
  try {
    const db = await SQLite.openDatabaseAsync('emerald.db')
    const res = await db.getFirstAsync<{ value: string }>(
      "SELECT value FROM configs WHERE key = 'language'"
    )
    return res?.value ?? null
  } catch (error) {
    console.log('Error: ', error);
    throw error;
  }
}

export async function setLanguageConfig(value: string) {
  try {
    const db = await SQLite.openDatabaseAsync('emerald.db')
    await db.runAsync(
      "UPDATE configs SET value = ? WHERE key = 'language'", value
    )
  } catch (error) {
    console.log('Error: ', error);
    throw error;
  }
}