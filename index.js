/* DO NOT EDIT BELOW THIS */
const { AmountOfNames , NamesPerPerson , FileOutput } = require('./settings.json');
const { Names } = require('./names.json');
const fs = require('fs');

/* Generate Names*/

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let output = [];

for (let i = 0; i < AmountOfNames; i++) {
  let FullName = [''];
  for (let x = 0; x < NamesPerPerson; x++) {
    FullName.push(Names[getRandomInt(Names.length)]);
  }

  let CompleteFullName;
  FullName.forEach(name => {
    if (FullName.indexOf(name) == 0) { 
      CompleteFullName += name;
    } else {
      CompleteFullName += ` ${name}`;
    }
  })


  console.log(`${CompleteFullName.toString().replace('undefined ','').replace('undefined','')}`)
  output.push(`${CompleteFullName.toString().replace('undefined ','').replace('undefined','')}`)
}
if (FileOutput.toString().toLowerCase().endsWith('.txt')||FileOutput.toString().toLowerCase().endsWith('.json')) { 
  if (FileOutput.toString().toLowerCase().endsWith('.txt')) {
    let txtOutput='';
    output.forEach(name => {
      txtOutput+=`${name.toString()}\n`;
    })

    fs.writeFileSync(FileOutput, txtOutput.substring(1).charAt(0).toUpperCase() + txtOutput.slice(1), (err) => { if (err) throw err })
  } else {
    fs.writeFileSync(FileOutput, JSON.stringify({ names : output }), (err) => { if (err) throw err })
  }
} else {
  console.log('\n\nYou did not specifiy a valid file type!\nSaving as txt.\n');
  let txtOutput='';
  output.forEach(name => {
    txtOutput+=`${name.toString()}\n`;
  })

  fs.writeFileSync(FileOutput, txtOutput.substring(1).charAt(0).toUpperCase() + txtOutput.slice(1)
  , (err) => { if (err) throw err })
}