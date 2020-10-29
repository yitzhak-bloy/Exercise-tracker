# Exercise Tracker REST API
### A microservice project, part of [Free Code Camp's curriculum](https://www.freecodecamp.org/learn).<br />

User Story:

* I can create a user by posting form data username to /api/exercise/new-user and returned will be an object with username and _id.<br />
* I can get an array of all users by getting api/exercise/users with the same info as when creating a user.<br />
* I can add an exercise to any user by posting form data userId(_id), description, duration, and optionally date to /api/exercise/add. If no date supplied it will use current date. Returned will be the user object with also with the exercise fields added.<br />
* I can retrieve a full exercise log of any user by getting /api/exercise/log with a parameter of userId(_id). Return will be the user object with added array log and count (total exercise count).<br />
* I can retrieve part of the log of any user by also passing along optional parameters of from & to or limit. (Date format yyyy-mm-dd, limit = int)<br />

See here: https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/exercise-tracker
