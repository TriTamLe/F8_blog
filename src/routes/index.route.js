const newsRoute = require('./news.route');
const siteRoute = require('./site.route');
const userRoute = require('./user.route');
const coursesRoute = require('./courses.route');
const meRoute = require('./me.route');

function route(app) {
  app.use('/news', newsRoute);
  app.use('/user', userRoute);
  app.use('/course', coursesRoute);
  app.use('/me', meRoute);
  app.use('/', siteRoute);
}

module.exports = route;
