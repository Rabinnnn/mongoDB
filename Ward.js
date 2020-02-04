var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Patients_records");
  var myobj = [
    {WARD_NAME:'',ROOM_NO:'',ATTENDED_TO_BY:'',DATE_ADMITTED:'',DATE_DISCHARGED:''},
  ];
  dbo.collection("Ward").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
