import mongoose from 'mongoose';
const URL_CONNECT =
  'mongodb+srv://ngodongquan:123456!@managecourse.uth9ml9.mongodb.net/?retryWrites=true&w=majority';

const connectDb = async () => {
  try {
    await mongoose.connect(URL_CONNECT, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connect succesfully');
  } catch (error) {
    console.log(error.message);
  }
};

export default { connectDb };
