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
		// I am trying to get the form to send its data to this method to get to DB..
		let game = req.body.Game_Name;
		const null_days_played = 0;
		const null_recent_date_played = "00/00/0000";

		console.log(game);

		let query_add = `INSERT INTO Game_Info (Game, Days_Played, Recent_Date_Played) VALUES ('"+game+"','"+null_days_played+"', '"+null_recent_date_played+"')`;

		// If all went well, go back to main screen
		res.redirect('/');

		db.query(query_add, (err,result) => {
			if (err) {
				console.log("failed to insert game into db");
			}
			else {
				console.log("inserted game successfully");
			}
		});
	},
	postEdit: (req, res) => {
		//let id = req.params.id;

		// TODO db.query to update game

		res.redirect('/');
	}
};
