import mongoose from 'mongoose';
const URL_CONNECT =
  'mongodb+srv://ngodongquan:123456!@managecourse.uth9ml9.mongodb.net/?retryWrites=true&w=majority';

const connectDb = async () => {
  try {
    await mongoose.connect(URL_CONNECT, {
      dbName: 'MainCourse',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // const {db} = mongoose.connection
    // db.collection('Paths').rename('pathrenames')
    console.log('connect succesfully');
  } catch (error) {
    console.log(error.message);
  }
};

export default { connectDb };
