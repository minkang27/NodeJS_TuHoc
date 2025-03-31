const Course = require("../models/Course");

class SiteController {

    //[GET] /home
    async index(req, res, next) {
        Course.find({})
            .then(courses => res.render('home', { courses: courses }))
            .catch(next);
      }

    search(req, res) {
        res.render('search');
    }



}

module.exports = new SiteController();


