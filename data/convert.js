const fs = require('fs');
const readline = require('readline');

async function processLineByLine() {
  const fileStream = fs.createReadStream('codes.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  const data = [];

  for await (const line of rl) {
    const code = line.substring(line.indexOf('<strong>') + 8, line.indexOf('</strong>'));
    const description = line.substring(line.indexOf('</strong>') + 9, line.indexOf('</li>'));
    data.push({ code, description });
  }

  fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
}

processLineByLine();