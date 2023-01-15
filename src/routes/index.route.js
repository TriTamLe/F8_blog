const newsRoute = require("./news.route");
const siteRoute = require("./site.route");

function route(app) {
  app.get("/news", newsRoute);
  app.get("/:slug", siteRoute);
  app.get("/", siteRoute);
}

module.exports = route;
