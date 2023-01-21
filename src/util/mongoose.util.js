module.exports = {
  multiMongooseToObject: function (mongooseArray) {
    return mongooseArray.map((mongoose) => mongoose.toObject());
  },
  mongooseObject: function (mongoose) {
    return mongoose.toObject();
  },
};
