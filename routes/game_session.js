module.exports = {
	getAdd: (req, res) => {
		res.render('add-game.ejs', {
			title: 'Board Games | Add game'
		});
	},
	postAdd: (req, res) => {
		console.log(req.body);

		//req.connect(function(err) {
			//if (err) throw err;
			//req.query("SELECT * FROM customers", function (err, result, fields) {
			 //if (err) throw err;
			 // console.log(result);
			//})
		//)};
			
		// TODO db.query to insert game-playing session

		// should I do a render?

		res.redirect('/');
	}
};
