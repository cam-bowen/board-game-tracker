module.exports = {
	getAdd: (req, res) => {
		res.render('add-game-session.ejs', {
			title: 'Board Games | Add game'
		});
	},
	getEdit: (req, res) => {
		res.render('edit-game.ejs', {
			title: 'Board Games | Edit Game'
		});
	},
	postAdd: (req, res) => {
		console.log(req.body);



			
		// TODO db.query to insert game-playing session

		res.redirect('/');
	}
};
