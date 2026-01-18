const db = require('./services/db');

console.time('suica query');
db('accounts')
.select('*')
.where(
  { uuid: '6544ecbf-09f5-4dbd-962c-10cc2fc4a8f1' }
)
.then(
  (rows) => {
    var row = rows[0];
    console.log(`account ${row.name} (${row.uuid}) has a balance of $${row.balance}`);
    console.timeEnd('suica query')
  }
);
