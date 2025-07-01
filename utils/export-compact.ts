import { unzip, zip } from 'react-native-zip-archive';
import { getAllScrolls, insertScrolls } from '../database/scrolls.dao';
import { readString } from 'react-native-csv';
import Dialog from "../utils/alerts";
import RNFS from 'react-native-fs';
import { ScrollModel } from '../model/ScrollModel';
import * as ExpoDocumentPicker from 'expo-document-picker';
import { DocumentPickerAsset } from 'expo-document-picker';

export const generateCsvZipped = async (t: any) => {
  try {
    const date = Date.now().toString();
    const header = "id,title,date,text";

    const allScrolls = await getAllScrolls();
    const rows = allScrolls.map(item => (
      `${item.id},"${item.title}",${item.date},"${item.text}"`
    ));

    const csvContent = [header, ...rows].join('\n');
    const csvPath = `${RNFS.DownloadDirectoryPath}/csv-${date}.csv`;
    await RNFS.writeFile(csvPath, csvContent, 'utf8');

    let zipName: string = `EmeraldScrolls-${date}.zip`;
    const zipPath = `${RNFS.DownloadDirectoryPath}/${zipName}`;
    await zip([csvPath], zipPath);

    RNFS.unlink(csvPath);
    const finalName = `\n\n${zipName}`;
    Dialog.notify(t, 'backup.export.saved', finalName);
  } catch (error) {
    console.log('Error on generateCsvZipped:', error);
  }
}

const readCsvZipped = async (
  t: any, docPciker: DocumentPickerAsset
) => {
  try {
    const dir = docPciker.name.replace('.zip', '');
    const targetPath = `${RNFS.DocumentDirectoryPath}/${dir}/`
    await unzip(docPciker.uri, targetPath);

    const files = await RNFS.readDir(targetPath);
    const csvFile = files.find(file => file.name.endsWith('.csv'));
    const csvFilePath = csvFile?.path ?? '';
    const csvString = await RNFS.readFile(csvFilePath, 'utf8');
    const results = readString(csvString, { header: true });
    
    const data = results.data    
    await insertScrolls(...(data as ScrollModel[]))
  } catch (error) {
    console.log('Error on readCsvZipped:', error)
  } finally {
    Dialog.notify(t, 'backup.import.success')
  }
}

export const pickDocument = async (t: any) => {
  try {
    const result = await ExpoDocumentPicker.getDocumentAsync({
      multiple: false,
      type: 'application/zip',
      copyToCacheDirectory: true,
    });

    if (result.canceled) return
    readCsvZipped(t, result.assets[0])
  } catch (error) {
    console.error('Error on pickDocument:', error);
  }
};