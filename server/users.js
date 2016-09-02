function usersController() {

	var that = this;
	that.store = [];

	var findUserById = function(req) {
		var found = that.store.filter(function (user) {
			return user.Id === parseInt(req.params.id);
		});
		if (found && found.length > 0) {
			return found[0]
		}
		return null
	};

	that.get = function (req, res, next) {
		res.send(200, that.store)
		return next();
	};

	that.getById = function (req, res, next) {
		var found = findUserById(req);
		if (found) {
			res.send(200, found);
		} else {
			res.send(404, "user not found");
		}
		return next();
	};

	that.post = function (req, res, next) {
		if (!req.body.hasOwnProperty(':id') || !req.body.hasOwnProperty(':name')) {
			res.send(500);
		} else {
			that.store.push({
				id: parseInt(req.body.id),
				name: req.body.name
			});
			res.send(201)
		}
		return next();
	};

	that.put = function (req, res, next) {
		if (!req.body.hasOwnProperty(':name')) {
			res.send(500);
			return (next);
		}
		;
		var found = findUserById(req)
		if (found) {
			found.name = req.body.name;
			res.send(200, found);
		} else {
			res.send(404, 'user not found')
		}
		return next();
	};

	that.del = function (req, res, next) {
		that.store = that.store.filter(function (user) {
			return user.id !== parseInt(req.params.id);
		});
		res.send(200);
		return next();
	}
}

module.exports = new usersController()