import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Course = new Schema({
  name: String,
  startDate: String,
  endDate: String,
});

export default mongoose.model('Courses', Course);
