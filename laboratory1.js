var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Patients_records");
  var myobj = [
  {TAG:'001A',TEST_TYPE:'WBC test',SPECIMEN:'Blood',LAB_RESULTS:'White blood cell count below average',LAB_TECHNICIAN:'Duncan',DATE:'2020-01-12'},
  {TAG:'002A',TEST_TYPE:'Salmonella test',SPECIMEN:'Stool',LAB_RESULTS:'Blood traces in stool',LAB_TECHNICIAN:'Duncan',DATE:'2020-01-12'},
  {TAG:'003A',TEST_TYPE:'WBC test',SPECIMEN:'Blood',LAB_RESULTS:'White blood cell count below average',LAB_TECHNICIAN:'Charles',DATE:'2020-01-12'},
  {TAG:'004A',TEST_TYPE:'Full vitals test',SPECIMEN:'Blood,Saliva,Stool,thyroid gland and heart',LAB_RESULTS:'Blood sugar:6.5g,Blood pressure:134/67mmHg,blood traces in stool,swollen thyroid gland,pH level:6.0,Heartbeat:regular',LAB_TECHNICIAN:'Charles',DATE:'2020-01-12'},
  {TAG:'005A',TEST_TYPE:'WBC test',SPECIMEN:'Blood',LAB_RESULTS:'White blood cell count below average',LAB_TECHNICIAN:'Grace',DATE:'2020-01-12'},
  {TAG:'008A',TEST_TYPE:'Hepatitis B test',SPECIMEN:'Blood and stool',LAB_RESULTS:'Protein:excess,Blood sugar:6.5g,Blood pressure:127mmHg,black stool,pH:6.5',LAB_TECHNICIAN:'Grace',DATE:'2020-01-12'},
  {TAG:'009A',TEST_TYPE:'WBC test',SPECIMEN:'Blood',LAB_RESULTS:'White blood cell count below average',LAB_TECHNICIAN:'Jane',DATE:'2020-01-12'},
  {TAG:'010A',TEST_TYPE:'WBC test',SPECIMEN:'Blood',LAB_RESULTS:'White blood cell count below average',LAB_TECHNICIAN:'Jane',DATE:'2020-01-12'}
  ];


  dbo.collection("laboratory1").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});
