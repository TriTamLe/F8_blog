const newsRoute = require('./news.route');
const siteRoute = require('./site.route');
const userRoute = require('./user.route');

function route(app) {
  app.use('/news', newsRoute);
  app.use('/user', userRoute);
  app.use('/', siteRoute);
}

module.exports = route;
