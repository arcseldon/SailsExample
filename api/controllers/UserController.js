/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    getOne: function (req, res) {
        User.find(req.param('id'))
            .then(function (model) {
                res.json(model);
            })
            .fail(function (err) {
                res.send(404);
            });
    },
    findAll: function (req, res) {
        User.find().done(function (err, users) {
            if (err) {
                res.send(400);
            } else {
                res.send(users);
            }
        });
    }
	
};

