class SiteController {
  //[GET] /home
  index(req, res) {
    console.log("home ok");
    res.render("home");
  }

  //[GET] /search
  search(req, res) {
    console.log("queries in get", req.query);
    res.render("search");
  }
}

module.exports = new SiteController();
