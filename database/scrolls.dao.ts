import * as SQLite from 'expo-sqlite'
import { ScrollModel } from '../model/ScrollModel'

const DATABASE_NAME: string = 'emerald.db'

export async function getAllScrolls(): Promise<ScrollModel[]> {
  const db = await SQLite.openDatabaseAsync(
    DATABASE_NAME, { useNewConnection: true }
  )
  try {
    return await db.getAllAsync<ScrollModel>(`SELECT * FROM scroll`)
  } catch (error) {
    console.error('Error on getAllScrolls:', error)
    throw error;
  } finally {
    await db.closeAsync()
  }
}

export async function insertScrolls(...scrolls: ScrollModel[]) {
  const db = await SQLite.openDatabaseAsync(
    DATABASE_NAME, { useNewConnection: true }
  )
  try {
    await db.withExclusiveTransactionAsync(async (tx) => {
      await Promise.all(scrolls.map(({ id, title, date, text }) =>
        tx.runAsync(`
          INSERT INTO scroll(id, title, date, text) VALUES ($id, $title, $date, $text)
        `, { $id: id, $title: title, $date: date, $text: text }
        )
      ))
    })
  } catch (error) {
    console.error('Error on insertScrolls:', error)
  } finally {
    await db.closeAsync()
  }
}

export async function deleteScrolls(...ids: string[]) {
  const db = await SQLite.openDatabaseAsync(
    DATABASE_NAME, { useNewConnection: true }
  )
  try {
    await db.withExclusiveTransactionAsync(async (tx) => {
      await Promise.all(ids.map((id) =>
        tx.runAsync(`DELETE FROM scroll WHERE id = $id`, { $id: id })
      ));
    });
  } catch (error) {
    console.error('Error on deleteScrolls:', error);
  } finally {
    await db.closeAsync()
  }
}

export async function updateScrolls(...scrolls: ScrollModel[]) {
  const db = await SQLite.openDatabaseAsync(
    DATABASE_NAME, { useNewConnection: true }
  )
  try {
    await db.withExclusiveTransactionAsync(async (tx) => {
      await Promise.all(scrolls.map(({ id, title, date, text }) =>
        tx.runAsync(
          `UPDATE scroll 
           SET title = $title, date = $date, text = $text
           WHERE id = $id`,
          { $id: id, $title: title, $date: date, $text: text }
        )
      ));
    });
  } catch (error) {
    console.error('Error on updateScrolls:', error);
  } finally {
    await db.closeAsync()
  }
}

export async function dropTable() {
  const db = await SQLite.openDatabaseAsync(
    DATABASE_NAME, { useNewConnection: true }
  )
  try{
    await db.runAsync('DROP TABLE IF EXISTS scroll')
  } catch (error) {
    console.error('Error on dropTable:', error); 
  } finally {
    await db.closeAsync()
  }
}