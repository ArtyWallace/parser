let csvToJson = require('convert-csv-to-json');

let fileInputName = __dirname + '/2021-04-01.csv';
let json;
let result = [];

function parseCsv () {
  json = csvToJson.fieldDelimiter('|').getJsonFromCsv(fileInputName);
}

function generateResult () {
  json.map(item => {
    result.push({
      point: item["Tablereport_source_Cell3"],
      INN: item["Tablereport_source_Cell2"],
      date: '2021-04-01',
      earn: item["Tablereport_source_Cell4"],
      spend: item["Tablereport_source_Cell5"]
    })
  })
}

parseCsv();
generateResult()

console.log(result);