module.exports = {
	getHomePage: (req, res) => {
		// TODO: Make query for games list
		let query = "SELECT Game, Recent_Date_Played FROM game_info";

		db.query(query, (err, result) => {
			if (err) {
				res.redirect('/');
			}
			res.render('index.ejs', 
			{
				title: 'Board Games ',
				titles: res.rows,
				players: result
			});
		});
	}
};
