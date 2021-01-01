import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    id: {type: Number, required: true},
  title: {type: String, required: true}
  });
  
  const GenreSchema = new Schema({
    name: { type: String, required: true},
    genre: {type: String, required: true },
  });

  const UserSchema = new Schema({
    username: { type: String, unique: true, required: true},
    password: {type: String, required: true },
    favourites: [MovieSchema],
    genres: [GenreSchema]  
});

export default mongoose.model('User', UserSchema);