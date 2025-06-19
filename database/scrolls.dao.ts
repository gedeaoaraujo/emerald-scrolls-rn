import * as SQLite from 'expo-sqlite'
import { ScrollModel } from '../model/ScrollModel'

export async function getAllScrolls(): Promise<ScrollModel[]> {
  const db = await SQLite.openDatabaseAsync('emerald.db')
  return await db.getAllAsync<ScrollModel>(`SELECT * FROM scroll`)
}

export async function insertScroll(scroll: ScrollModel) {
  const db = await SQLite.openDatabaseAsync('emerald.db')
  await db.execAsync(`
    INSERT INTO scroll(title, date, text) VALUES (
      '${scroll.title}', '${scroll.date}', '${scroll.text}'
    );
  `)
}

export async function deleteScroll(id: number) {
  const db = await SQLite.openDatabaseAsync('emerald.db')
  await db.runAsync(`DELETE FROM scroll WHERE id = $id`, { id })
}

export async function updateScroll(scroll: ScrollModel){
  const db = await SQLite.openDatabaseAsync('emerald.db')
  const { id, title, date, text } = scroll
  await db.runAsync(
    `UPDATE scroll 
      SET title = $title, date = $date, text = $text
      WHERE id = $id
    `, { id, title, date, text }
  )
}
