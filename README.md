# Butterfly-Task
This is a practice project for Butterfly.ai
This application has been developed using Nestjs(https://nestjs.com), postgres(https://www.postgresql.org) database and typeorm(https://typeorm.io) for querying in databse.

This application contains basic CRUD operation  for:
1. Companies (company informations)
2. Questions (questions for user's feedback)
3. Feedbacks (feedback and comment from user)
4. Satisfaction (smily response)

Instruction for running:
1. copy/clone source code from github.
2. Install dependencies using command `npm install` or  `npm ci` (make sure all the dependencies are installed properly).
3. Update db configuration in .env file. 
4. In terminal view start the application using command `npm start` Or from "Run and Debug" tab, select "Debug Butterfly Exercise" and run the application in debug mode.
5. Import the attached postman collection from source and run "Populate Mock Data" request (POST request) inorder to initialize companies, questions informations in table.
6. You can test the code with other requests in postman collection.

FYI: The application runs on port 3001, make sure the port is available before running the application.

For checking data in database:
select * from satisfactions; -- for checking mood/satisfaction of user.
select * from questions; -- for checking list of questions.
select * from feedbacks; -- for checking user's feedback (rating and comment) for different questions.
