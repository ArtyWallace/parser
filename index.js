let csvToJson = require('convert-csv-to-json');
const fs = require('fs')

let fileInputName = __dirname + '/2021-04-01.csv';
let fileOutputName = 'myOutputFile.json';
let result = [];

async function parseCsv () {
  await csvToJson.fieldDelimiter('|').generateJsonFileFromCsv(fileInputName, fileOutputName);
  fs.readFile(fileOutputName, (err, data) => {
    const json = JSON.parse(data);
    json.map(item => {
      result.push({
        point: item["Tablereport_source_Cell3"],
        INN: item["Tablereport_source_Cell2"],
        date: '2021-04-01',
        earn: item["Tablereport_source_Cell4"],
        spend: item["Tablereport_source_Cell5"]
      })
    })
  });
}

parseCsv();