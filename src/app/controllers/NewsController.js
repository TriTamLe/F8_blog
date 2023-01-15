class NewsController {
  //[GET] /news
  index(req, res) {
    res.render("news");
  }

  slugShow(req, res) {
    res.send("News Detail");
  }
}

module.exports = new NewsController();
