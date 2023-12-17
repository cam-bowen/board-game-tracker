module.exports = { // this is where you get the data, that will be updated to the DB.
	getAdd: (req, res) => {
		res.render('add-game.ejs', {
			title: 'Board Games | Add game'
		});
	},
	getEdit: (req, res) => {
		res.render('edit-game.ejs', {
			title: 'Board Games | Edit game'
		});
	},
	postAdd: (req, res) => {
		//let query_add = "UPDATE game_info SET ";

		// If all went well, go back to main screen
		res.redirect('/');
	},
	postEdit: (req, res) => {
		//let id = req.params.id;

		// TODO db.query to update game

		res.redirect('/');
	}
};
