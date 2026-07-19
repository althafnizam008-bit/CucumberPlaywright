import * as XLSX from "xlsx";

export class ExcelReader {

    static getData(sheetName: string) {

        const workbook = XLSX.readFile("./testData/LoginData.xlsx");

        const sheet = workbook.Sheets[sheetName];

        return XLSX.utils.sheet_to_json(sheet);

    }

}