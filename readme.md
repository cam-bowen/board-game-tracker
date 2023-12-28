Story: Board Game Directory
=====

A few months ago, your best friend organized a weekly board game night. As the number of participants
has grown, so has the library of available games. Your friend has asked you to create a website to
track which games are available, as well as all the times they have been played. Your goal is to
create a good-looking prototype that you won't be embarrassed to show your friend, not a fully-finished
product.

Requirements
=====

* Ability to add and edit a board game record
* Ability to add multiple game session records associated with a game
* Main screen should include a listing of available games, including the date of the most recent game session for each

Technical detail
=====

You should be able to develop on Windows, Mac, or Linux. The project has already been started for you. Out of the many, many alternatives, these are the tools we've chosen for this challenge:

* <a href="https://nodejs.org/en/">node.js</a>
* <a href="https://expressjs.com/">express - web server</a>
* <a href="https://ejs.co/">EJS - templating</a>
* <a href="https://mariadb.org/">MariaDB - database backend</a>

Also, consider using a [Dockerfile](https://docs.docker.com/engine/reference/builder/) to build your development environement.


Please note:

* We have not defined the database schema for you. You should decide which fields would be useful to collect and what the table structure should be and put the statements necessary for that in schema.sql.
* Include sample data in your schema.sql file so that we can see what your app looks like fully populated from the start.
* If you see any "TODO" comments in code, those are for you!

Features that are not required
=====

* User account management
* Reactivity

Bonus
=====

For extra points, think of a useful feature to add to the system that your friend didn't mention. Also, you can implement the database using a docker container (notes below)

Getting the code and completing your challenge
=====

1) Since this is a [git template repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template), it isn't possible to fork it, so you will need to "[Use template](https://docs.github.com/assets/cb-77734/mw-1440/images/help/repository/use-this-template-button.webp)" and clone it to your local development environment. Then, create a private github repository of your own and change that to be the upstream of your local copy. Once you are ready for us to see your code, add these users as collaborators to your project:

* https://github.com/tslabach
* https://github.com/lpeckham1
* https://github.com/dcornewell
* https://github.com/ariserac
* https://github.com/horner

2) update the README in your repository with some screenshots and a link to a YouTube short/video demonstrating your solution 


Docker Notes if you'd like to implement a docker container for the database
============
To start the database as a docker service:
```
docker run --name=miedb -d -p 3307:3306 -e MARIADB_USER=app -e MARIADB_PASSWORD=wonderful -e MARIADB_DATABASE=miechallenge -e MARIADB_ROOT_PASSWORD=wonderful mariadb:latest
```
NOTE!!!, do not leave the docker running when done testing.  Do a `docker kill miedb` to kill it when done BUT the data in the database will BE GONE!  You can restart it by doing `docker restart miedb` but you should consider doing a `docker rm miedb` to cleanup.

You can connect to it from the host machine using:
`mysql --host=localhost -P 3307 --user=app --password=wonderful miechallenge`
or from docker by doing:
`docker exec -it miedb mysql --host=localhost -P 3306 --user=app --password=wonderful miechallenge`

Bonus points if you can make a fully automated Dockerfile container for building and testing the app with a GitHub Action.


How MIE will test your code (change this if needed)
=====

* Reviewer will:

```

# if the developer does not know about or is incapable of dockerizing mysql and loading the data...
export APPLICANT_USER=''
git clone git@github.mieweb.com:$APPLICANT_USER/mie-dev-challenge devchallenge_$APPLICANT_USER
mysql -e "CREATE DATABASE devchallenge_$APPLICANT_USER"
mysql devchallenge_$APPLICANT_USER < schema.sql


# what we really should just have to to (if they do not do the bonus):
npm install
npm start
```



Notes by Cameron Bowen
====

What each page does:

Main menu/index : shows the user the library of games, and 3 buttons (play, edit, add a game).

Play Game : You type the name of your game in that you have just played, and the database will increment the number of days you nave played the game.

Edit Game Info : You type the name of the game you want to edit. After that you HAVE to change the name of it, amount of days played, and recent date. If YOU DO NOT WANT to edit cerain columns/fields, you can just re-enter the value that was there previously, but you must enter something or you will lose the old data for that game.

Add Game : Did you get a new board game? If so, just type the name of it into the text field and it will get added to the database with default values in the days played and recent date played field, don't worry, once you "play" the game the data and number of days played will be changed to the correct values, instead of those null values initeated when you add the game to the libarary. 

/----------/

Best Case Scenario
====

You get a new game and enter it into the website. 

You play the game.

The # of days played field goes to 1 and the recent date is added to the receent data played field, which you can see at the main menu.

You really should never have to edit game information, unless you misspell a game name or forget to hit "play" after a game session. *****


HOW TO START THE APP
====

1. I do have the dockerfile but the docker file does not work. I attempted it, I got close, but I even had trouble getting mariadb set up on my system. The container and build keep competitng with ports, at least that wnat I believe what is going on. 

2. create a user named "root" with the password "password" and the web app will run fine after you complete step 3...

3. All you have to do to run this, is create a mariadb called "miechallenge" and run the CREATE TABLE ...... command in the schema.sql in the mysql terminal/command line. (make sure you do step 2)

4. npm install, npm start.

photos of the gui + console output in folder "screenshots"



