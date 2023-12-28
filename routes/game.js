module.exports = { 
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
		let game = req.body.Game_Name;
		const null_days_played = 0;
		const null_recent_date_played = "00/00/0000";

		let query_add = `INSERT INTO game_info (Game, Days_Played, Recent_Date_Played) VALUES ('${game}', ${null_days_played}, '${null_recent_date_played}')`;

		console.log("SQL Query:", query_add); // to show user the SQL Query used...

		db.query(query_add, (err,result) => {
			if (err) {
				console.log(game);
				console.log(err);
				console.log("failed to insert game into db");
			}
			else {
				console.log("inserted game successfully");
			}
		});

		res.redirect('/');
	},
	postEdit: (req, res) => {
		let game_to_update = req.body.Name_Of_Edited_Game;
		let new_game_name = req.body.New_Game_Name;
		let new_days_played = req.body.New_Days_Played;
		let new_recent_date_played = req.body.New_Recent_Date_Played;

		let query_edit_update = `UPDATE game_info SET Game = '${new_game_name}', Days_Played = '${new_days_played}', Recent_Date_Played = '${new_recent_date_played}' WHERE Game = '${game_to_update}'`;

		// TODO db.query to update game [DONE]

		db.query(query_edit_update, [new_game_name, new_days_played, new_recent_date_played, game_to_update], (err, result) => {
			if (err) {
				console.error("Error updating game_info: ", err);
			} else {
				console.log("Game updated successfully");
			}
		});

		res.redirect('/');
	}
};
