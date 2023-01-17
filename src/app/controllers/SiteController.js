const Course = require('../models/Course');

class SiteController {
  //[GET] /home
  index(req, res) {
    Course.find({})
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log('DB Error!', err);
      });
  }

  //[GET] /search
  search(req, res) {
    res.render('search');
  }

  //[GET] /searchRs
  searchRs(req, res) {
    const qr = req.body;
    const DOB = new Date(qr.DOB);
    const currentDate = new Date();

    let _age = currentDate.getFullYear() - DOB.getFullYear();
    if (currentDate.getMonth() < DOB.getMonth()) _age -= 1;
    if (currentDate.getMonth() == DOB.getMonth()) {
      if (currentDate.getDate() < DOB.getDate) _age -= 1;
    }

    const result = {
      fullname: qr.fname,
      gender:
        qr.gender === 'male' ? 'ông' : qr.gender === 'female' ? 'bà' : 'ngài',
      age: _age,
    };
    res.render('searchRs', result);
  }
}

module.exports = new SiteController();
