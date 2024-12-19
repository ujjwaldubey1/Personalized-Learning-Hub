
import mongoose, { model, Schema } from "mongoose";

interface IUser extends Document {
  name:string,
  email:string,
  password:string,
  designation:string,
}

const UserSchema:Schema = new Schema({
       
      name: {
        required:true,
        type:String,
      },
      email:{
        required:true,
        type:String,
      },
      password:{
        required:true,
        type:String
      },
      Designation:{
        required:true,
        type:String
      }

})

      const User = mongoose.models.User || model<IUser> ("User",UserSchema)

      export default User;
