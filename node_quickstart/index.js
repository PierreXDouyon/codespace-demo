const express = require('express')
const app = express()
const port = 3000

var bodyParser = require('body-parser')

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb://localhost:27017/?readPreference=primary&ssl=false&directConnection=true";


// parse application/json
app.use(bodyParser.json())

app.post('/', (req, res) => {

  console.log(req.body);

  const client = new MongoClient(uri);

 async function run() {
   try {
     const database = client.db('codespacetable');
     const student = database.collection('student');
     // Query for a movie that has the title 'Back to the Future'
    //  const query = { name: 'Peter2', age: 46 };
     const result = await student.insertOne(req.body);
     console.log(result);
   } finally {
     // Ensures that the client will close when you finish/error
     await client.close();
   }
 }
  
  run().catch(console.dir);
  
    res.send('Hello World!')
  
})

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// run().catch(console.dir);