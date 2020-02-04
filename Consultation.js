var MongoClient = require('mongodb').MongoClient;
var url ='mongodb://localhost:27017/';

MongoClient.connect(url,function(err,db){
  if(err) throw err;
  var dbo = db.db('Patients_records')
  var myobj = [
    {TAG:'001A',SYMPTOMS:'Fever,headaches and vomiting',Date:'2020-01-12'},
    {TAG:'002A',SYMPTOMS:'Diarrhoea,headaches,vomiting and abdominal pains',Date:'2020-01-12'},
    {TAG:'003A',SYMPTOMS:'Fever,headaches and vomiting',Date:'2020-01-12'},
    {TAG:'004A',SYMPTOMS:'General fatigue,abdominal pain,loss of weight,jaundiced skin,blood shot eyes and headaches',Date:'2020-01-12'},
    {TAG:'005A',SYMPTOMS:'Loss of appetite,fever,headaches and vomiting',Date:'2020-01-12'},
    {TAG:'006A',SYMPTOMS:'skin rashes',Date:'2020-01-12'},
    {TAG:'007A',SYMPTOMS:'Sweating,fever,loss of appetite and headache',Date:'2020-01-12'},
    {TAG:'008A',SYMPTOMS:'jaundicedskin,yellowish eyes,abdominal pains and headachd',Date:'2020-01-12'},
    {TAG:'009A',SYMPTOMS:'Fever,headaches and vomiting',Date:'2020-01-12'},
    {TAG:'001A',SYMPTOMS:'Fever,headaches and vomiting',Date:'2020-01-12'}
  ];
  dbo.collection('Consultation').insertMany(myobj,function(err,res){
    if (err) throw err;
    console.log('Collection created successfully');
    console.log('Number of documents inserted:'+ res.insertedCount);
    db.close();
  });
});
