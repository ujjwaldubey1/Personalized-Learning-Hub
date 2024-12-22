
import mongoose from "mongoose";

const Dbconnect = async () =>{

  if(mongoose.connections[0].readyState) {
    console.log("already connected")
  } 
  else {
    try {

      const URI:string = process.env.MONGODB_CONNECTION_KEY ||"mongodb://127.0.0.1:27017/LearnigTracker"
      await mongoose.connect(URI);
      console.log("connecte successfully")
    } catch (error) {
        console.log("Internal error" , error)
    }
  }
}

export default Dbconnect;