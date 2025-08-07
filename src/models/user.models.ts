import  {Schema, model, Document} from 'mongoose';

// Define the User interface
export interface User extends Document {
  username: string;
  email: string;
  password: string; 
}

// Define the User schema
const userSchema = new Schema<User>({
  username: { type: String, required: true},
  email: {type: String, required: true, unique: true, trim: true},
  password: {type: String, required: true },
});

//Interactuar con la base de datos
const UserModel = model<User>('User', userSchema);

export default UserModel;