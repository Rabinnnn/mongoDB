var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hospital_staff");
  var myobj = [
    {FNAME:'John',LNAME:'Doe',OCCUPATION:'Doctor',PHONE:'0778954678',RESIDENCE:'Nairobi'},
    {FNAME:'Esther',LNAME:'Kul',OCCUPATION:'Doctor',PHONE:'0757011672',RESIDENCE:'Nairobi'},
    {FNAME:'Chung',LNAME:'Lee',OCCUPATION:'Doctor',PHONE:'0733789225',RESIDENCE:'Nairobi'},
    {FNAME:'Jay',LNAME:'Rawlings',OCCUPATION:'Nurse',PHONE:'0700054678',RESIDENCE:'Nairobi'},
    {FNAME:'Chris',LNAME:'Wayne',OCCUPATION:'Nurse',PHONE:'0711054289',RESIDENCE:'Nairobi'},
    {FNAME:'Jane',LNAME:'Briggs',OCCUPATION:'Lab_technician',PHONE:'0768934698',RESIDENCE:'Nairobi'},
    {FNAME:'Charles',LNAME:'Brown',OCCUPATION:'Lab_technician',PHONE:'0747054678',RESIDENCE:'Nairobi'},
    {FNAME:'Grace',LNAME:'Deane',OCCUPATION:'Lab_technician',PHONE:'0727354678',RESIDENCE:'Nairobi'},
    {FNAME:'Duncan',LNAME:'Lou',OCCUPATION:'Lab_technician',PHONE:'0747002548',RESIDENCE:'Nairobi'},
    {FNAME:'Joe',LNAME:'Bing',OCCUPATION:'Lab_technician',PHONE:'0718904378',RESIDENCE:'Nairobi'},
  ];
  dbo.collection("hospital_staff").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
