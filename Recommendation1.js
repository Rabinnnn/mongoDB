var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url,function(err,db){
  if (err) throw err;
  var dbo = db.db('Patients_records');
  var myobj = [
  {TAG:'001A',DOCTOR:'Dr.Doe',PRESCRIPTION:'Get WBC test at the lab',DATE:'2020-01-12'},
  {TAG:'002A',DOCTOR:'Dr.Doe',PRESCRIPTION:'Get WBC Salmonella at the lab',DATE:'2020-01-12'},
  {TAG:'003A',DOCTOR:'Dr.Doe',PRESCRIPTION:'Get WBC test at the lab',DATE:'2020-01-12'},
  {TAG:'004A',DOCTOR:'Dr.Doe',PRESCRIPTION:'Get full vitals checkup at the lab',DATE:'2020-01-12'},
  {TAG:'005A',DOCTOR:'Dr.Doe',PRESCRIPTION:'Get WBC test at the lab',DATE:'2020-01-12'},
  {TAG:'006A',DOCTOR:'Dr.Doe',PRESCRIPTION:'Buy Dermidex ointment from the pharmacy',DATE:'2020-01-12'},
  {TAG:'007A',DOCTOR:'Dr.Doe',PRESCRIPTION:'Buy ACTM tablets from the pharmacy',DATE:'2020-01-12'},
  {TAG:'008A',DOCTOR:'Dr.Doe',PRESCRIPTION:'Get Hepatitis at the lab',DATE:'2020-01-12'},
  {TAG:'009A',DOCTOR:'Dr.Doe',PRESCRIPTION:'Get WBC test at the lab',DATE:'2020-01-12'},
  {TAG:'010A',DOCTOR:'Dr.Doe',PRESCRIPTION:'Get WBC test at the lab',DATE:'2020-01-12'}
  ];
  dbo.collection('Recommendation1').insertMany(myobj,function(err,res){
  if (err) throw err;
  console.log('Collection created successfully');
  console.log('Number of documents inserted:'+ res.insertedCount);
  db.close();
  });
});
