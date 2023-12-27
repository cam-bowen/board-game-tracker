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
		let game_to_play = req.body.Name_Of_Game_Wanted_To_Play;
		const currentDate = new Date().toDateString();

		let query_insert_session = `UPDATE game_info SET Days_Played = Days_Played + 1, Recent_Date_Played = '${currentDate}' WHERE Game = '${game_to_play}'`;



			
		// TODO db.query to insert game-playing session [DONE]

		db.query(query_insert_session, [game_to_play,currentDate], (err, result) => {
			if (err) {
				console.error("Error updating game_info: ", err);
			} else {
				console.log("Game session succesful");
			}
		});

		res.redirect('/');
	}
};
