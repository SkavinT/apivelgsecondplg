const mongoose = require("mongoose");

//versi 2.2.12
// "mongodb+srv://mdp:BelajarMongo2024@cluster0.n214x.mongodb.net/dbbuku?retryWrites=true&w=majority&appName=Cluster0"
//  "mongodb://mdp:BelajarMongo2024@cluster0-shard-00-00.n214x.mongodb.net:27017,cluster0-shard-00-01.n214x.mongodb.net:27017,cluster0-shard-00-02.n214x.mongodb.net:27017/dbbuku?ssl=true&replicaSet=atlas-107w2z-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"

// mongoose.connect(
//   "mongodb://mdp:BelajarMongo2024@cluster0-shard-00-00.n214x.mongodb.net:27017,cluster0-shard-00-01.n214x.mongodb.net:27017,cluster0-shard-00-02.n214x.mongodb.net:27017/dbbuku?ssl=true&replicaSet=atlas-107w2z-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"
// ).then(()=>{
//   console.log("Connected to Database");
// }).catch((err)=>{
//   console.error('App starting error:', err.stack);
//   console.log("Connection Failed");
// });

mongoose
  .connect("mongodb+srv://dav1dct:0812@velgsecond.kr8uk.mongodb.net/?retryWrites=true&w=majority&appName=velgsecond")
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((err) => {
    console.error("App starting error:", err.stack);  
    console.log("Connection Failed");
  });
