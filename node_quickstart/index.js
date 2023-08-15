const express = require('express')
const app = express()
const port = 3000

const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "<connection string uri>";
const client = new MongoClient("mongodb://localhost:27017/?readPreference=primary&ssl=false&directConnection=true");

app.post('/', (req, res) => {
  res.send('Hello World!')



//  async function run() {
//    try {
//      const database = client.db('codespacetable');
//      const student = database.collection('student');
//      // Query for a movie that has the title 'Back to the Future'
//      const query = { name: 'Peter2', age: 46 };
//      const result = await student.insertOne(query);
//      console.log(result);
//    } finally {
//      // Ensures that the client will close when you finish/error
//      await client.close();
//    }
//  }
})

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// run().catch(console.dir);