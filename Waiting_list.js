var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url,function(err,db){
  if (err) throw err;
  var dbo = db.db('Patients_records');
  var myobj= [
  {FNAME:'James',LNAME:'Bond',TAG:'001A'},
  {FNAME:'Joan',LNAME:'Bond',TAG:'002A'},
  {FNAME:'Chris',LNAME:'Lou',TAG:'003A'},
  {FNAME:'Frank',LNAME:'Lee',TAG:'004A'},
  {FNAME:'Scarlet',LNAME:'Black',TAG:'005A'},
  {FNAME:'Brian',LNAME:'Dun',TAG:'006A'},
  {FNAME:'Rosa',LNAME:'Drew',TAG:'007A'},
  {FNAME:'Beth',LNAME:'Fouye',TAG:'008A'},
  {FNAME:'Valery',LNAME:'Greene',TAG:'009A'},
  {FNAME:'Yusuf',LNAME:'Akhbar',TAG:'010A'}
  ];
  dbo.collection('Waiting_list').insertMany(myobj,function(err,res){
    if(err) throw err;
    console.log("Collection 'Waiting_list' has been created and the documents successfully added!" );
    console.log("Number of documents inserted:"+ res.insertedCount);
    });
});
