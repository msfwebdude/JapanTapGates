var { uniqueNamesGenerator, names } = require('unique-names-generator');

var db = require('./services/db');

var config = {
  dictionaries: [names, names],
  separator: ' ', 
  length: 2
};

async function seed() {
  await db('accounts').del();
  await db('accounts').insert( { name: "Bob Smith", balance: 10000, uuid: "6544ecbf-09f5-4dbd-962c-10cc2fc4a8f1" } )
        
  console.log(`Added name Bob Smith our test subject`);

  for (let i = 0; i < 100000; i++) {  
    const randomName = uniqueNamesGenerator(config); 

    var rows = await db('accounts')
      .insert( { name: randomName, balance: Number((Math.random()*10).toFixed(2)) } )
      .returning('*');
    var row = rows[0];
    console.log(`#${i} Added name ${row.name} (${row.uuid}) with $${row.balance}`);
        
  }  
}

var main = async () => { await seed(); };


main();