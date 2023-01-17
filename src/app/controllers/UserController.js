const { renderSync } = require('node-sass');

class UserController {
  index(req, res) {
    res.render('profile', { content: 'This is my profile' });
  }
  showProfile(req, res) {
    res.render('profile', {
      content: `This is profile with id = ${req.params.userParam}`,
    });
  }
}
module.exports = new UserController();
