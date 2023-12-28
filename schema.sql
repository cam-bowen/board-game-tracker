

# TODO: add mysql/mariadb table definitions
    CREATE TABLE miechallenge.game_info (
        Game NVARCHAR(50) NOT NULL,
        Days_Played INT(5) NOT NULL,
        Recent_Date_Played NVARCHAR(50) NOT NULL
    );

# TODO: add sample data
INSERT INTO game_info(ID, Game, Days_Played, Recent_Date_Played)
VALUES 
    (1, "Monopoly", 3, "12/23/22");
    (2, "Phase Ten", 2, "12.15.22");
    (3, "Yahtzee", 4, "12.29.22");
    (4, "Life", 10, "1.13.23");
    (5, "Poker", 2, "1.22.23");
