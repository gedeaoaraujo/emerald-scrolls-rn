import * as SQLite from 'expo-sqlite'
import { ScrollModel } from '../model/ScrollModel'

export async function getAllScrolls(): Promise<ScrollModel[]> {
  const db = await SQLite.openDatabaseAsync('emerald.db')
  return await db.getAllAsync<ScrollModel>(`SELECT * FROM scroll`)
}

export async function insertScrolls(...scrolls: ScrollModel[]) {
  try {
    const db = await SQLite.openDatabaseAsync('emerald.db')
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
  }
}

export async function deleteScrolls(...ids: string[]) {
  try {
    const db = await SQLite.openDatabaseAsync('emerald.db')
    await db.withExclusiveTransactionAsync(async (tx) => {
      await Promise.all(ids.map((id) =>
        tx.runAsync(`DELETE FROM scroll WHERE id = $id`, { $id: id })
      ));
    });
  } catch (error) {
    console.error('Error on deleteScrolls:', error);
  }
}

export async function updateScrolls(...scrolls: ScrollModel[]) {
  try {
    const db = await SQLite.openDatabaseAsync('emerald.db')
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
  }
}

export async function dropTable() {
  try{
    const db = await SQLite.openDatabaseAsync('emerald.db')
    db.runAsync('DROP TABLE IF EXISTS scroll')
  } catch (error) {
    console.error('Error on dropTable:', error); 
  }
}