import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  deleted: {
    type: Boolean,
    required: false,
  },
});

// mongoose.Schema.Types.String.checkRequired(v => typeof v === 'string');

export default mongoose.model('Course', CourseSchema);
