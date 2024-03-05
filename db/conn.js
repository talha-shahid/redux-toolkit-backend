const mongoose =require("mongoose");

mongoose.connect("mongodb+srv://talhashahidch:WGZDw45TmZ9PBokG@mycluster.lw04dik.mongodb.net/myDatabase")
.then(()=>{console.log("connection is successful")})
.catch((e)=>{console.log("No connection")})