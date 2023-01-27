const Course = require('../models/Course');
const {
  multiMongooseToObject,
  mongooseObject,
} = require('../../util/mongoose.util');

class MeController {
  //[GET] /get stored courses
  storedCourses(req, res, next) {
    Course.find()
      .then(courses => {
        res.render('me/stored-courses', {
          courses: multiMongooseToObject(courses),
        });
      })
      .catch(next);
  }

  //[GET] /get deleted courses
  trashedCourses(req, res, next) {
    Course.findDeleted()
      .then(courses => {
        res.render('me/trashed-courses', {
          courses: multiMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
