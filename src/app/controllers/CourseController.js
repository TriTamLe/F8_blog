const Course = require('../models/Course');
const {
  multiMongooseToObject,
  mongooseObject,
} = require('../../util/mongoose.util');

class CourseController {
  //[GET] /create new course
  create(req, res, next) {
    res.render('courses/create');
  }

  //[POST] /store the new course
  store(req, res, nex) {
    const newCourse = req.body;
    const imgID = req.body.imageID;
    console.log(imgID);
    newCourse.image = `https://i3.ytimg.com/vi/${imgID}/maxresdefault.jpg`;
    Course.create(newCourse).then(() => {
      res.redirect('/');
    });
  }

  //[GET] /showCourse
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render('courses/show', { course: mongooseObject(course) });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //[GET] /edit/:id
  edit(req, res, next) {
    Course.findById(req.params.id)
      .then((course) =>
        res.render('courses/edit', {
          course: mongooseObject(course),
        }),
      )
      .catch(next);
  }

  //[PUT] /:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.redirect('/me/stored/courses');
      })
      .catch(next);
  }
}

module.exports = new CourseController();
