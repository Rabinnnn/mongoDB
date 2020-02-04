var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
  if(err) throw err;
  var dbo = db.db("Patients_records");
  dbo.createCollection("Personal_information",function(err,res)
  {
    if (err) throw err;
    console.log("Collection created successfully!");
    db.close();
  });
});
