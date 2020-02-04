var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url,function(err,db){
  if (err) throw err;
  var dbo = db.db('Patients_records');
  var myobj = [
    {FNAME:'James',LNAME:'Bond',AGE:'25',GENDER:'M',PHONE:'0795768999'},
    {FNAME:'Joan',LNAME:'Bond',AGE:'25',GENDER:'F',PHONE:'0774768979'},
    {FNAME:'Chris',LNAME:'Lou',AGE:'20',GENDER:'M',PHONE:'0764768479'},
    {FNAME:'Frank',LNAME:'Lee',AGE:'28',GENDER:'M',PHONE:'0704768471'},
    {FNAME:'Scarlet',LNAME:'Black',AGE:'19',GENDER:'F',PHONE:'0733768479'},
    {FNAME:'Brian',LNAME:'Dun',AGE:'15',GENDER:'M',PHONE:'0784768371'},
    {FNAME:'Rosa',LNAME:'Drew',AGE:'44',GENDER:'F',PHONE:'0704718472'},
    {FNAME:'Beth',LNAME:'Fouye',AGE:'75',GENDER:'F',PHONE:'0712366454'},
    {FNAME:'Valery',LNAME:'Greene',AGE:'18',GENDER:'F',PHONE:'0700068479'},
    {FNAME:'Yusuf',LNAME:'Akhbar',AGE:'35',GENDER:'M',PHONE:'0764268000'}

  ];
  dbo.collection('Personal_info').insertMany(myobj,function(err,res){
    if(err) throw err;
    console.log('Number of Documents inserted:'+res.insertedCount);
    db.close;
  });
});
