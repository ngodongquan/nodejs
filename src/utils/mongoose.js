export default {
  mutipleMongooseToObject: (mongooses) => {
    return mongooses.map((el) => el.toObject());
  },
};
