var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url,function(err,db){
  if (err) throw err;
  var dbo = db.db('Patients_records');
  var myobj = [
    {PRESCRIPTION:'Buy ACTM tablets and paracetamol from pharmacy',ADDITIONAL_INFO:'sleep under a mosquito net',DOCTOR:'Dr.Doe',DATE:'2020-01-12'},
    {PRESCRIPTION:'Buy Amoxicillin, albendazole and paracetamol from pharmacy',ADDITIONAL_INFO:'make sure your drinking water is treated and stored well',DOCTOR:'Dr.Doe',DATE:'2020-01-12'},
    {PRESCRIPTION:'Buy ACTM tablets and paracetamol from pharmacy',ADDITIONAL_INFO:'sleep under a mosquito net',DOCTOR:'Dr.Doe',DATE:'2020-01-12'},
    {PRESCRIPTION:'Buy Amoxicillin,Colotrazol and Diclofenac from pharmacy',ADDITIONAL_INFO:'Avoid alcoholic drinks and beverages such as coffee',DOCTOR:'Dr.Doe',DATE:'2020-01-12'},
    {PRESCRIPTION:'Buy ACTM tablets and paracetamol from pharmacy',ADDITIONAL_INFO:'sleep under a mosquito net',DOCTOR:'Dr.Doe',DATE:'2020-01-12'},
    {PRESCRIPTION:'Buy Amoxicillin,Colotrazol and Diclofenac from pharmacy',ADDITIONAL_INFO:'Avoid alcoholic drinks and beverages such as coffee',DOCTOR:'Dr.Doe',DATE:'2020-01-12'},
    {PRESCRIPTION:'Buy ACTM tablets and paracetamol from pharmacy',ADDITIONAL_INFO:'sleep under a mosquito net',DOCTOR:'Dr.Doe',DATE:'2020-01-12'},
    {PRESCRIPTION:'Buy ACTM tablets and paracetamol from pharmacy',ADDITIONAL_INFO:'sleep under a mosquito net',DOCTOR:'Dr.Doe',DATE:'2020-01-12'}
      ];

    dbo.collection('Recommendation2').insertMany(myobj,function(err,res){
    if (err) throw err;
    console.log('collection created successfully');
    console.log('Number of documents inserted:' + res.insertedCount);
    db.close();
    });
});
