const express = require('express');
const dbo = require('./db-connection');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbo.connectToServer(() => {});

app.get('/person', (req, res) => {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection('person')
    .findOne({ name: req.query.name }, (err, result) => {
      if (err) {
        res.status(400).send('error fetching');
      } else {
        res.json(result);
      }
    });
});

app.post('/person', (req, res) => {
  const person = {
    name: req.body.name,
    age: req.body.age,
    phone: req.body.phone,
  };

  const dbConnect = dbo.getDb();

  dbConnect.collection('person').insertOne(person, (err, result) => {
    if (err) {
      res.status(400).send('Error inserting matches!');
    } else {
      console.log(`Added a new match with id ${result.insertedId}`);
      res.status(204).send();
    }
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
