var include = require("includemvc");
var app = include.app();

exports.getPlatform = function(req, res) {
    res.render("platform", {
        title: "Add blog"
    })
}
