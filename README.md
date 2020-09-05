# FamPay-SpinWheelTask

The goal is to design a progressive web app that allows the user to spin by tapping ‘Spin’ and get the reward mentioned on the segment of wheel where it stops. Alternatively, you can hold and rotate the wheel anti-clockwise and increase the power of rotation which is visible in the arrow below the wheel and once you leave it after it crosses the black mark, it rotates with higher power clockwise. The wheel index is to be stored in a google spreadsheet via the gapi. And to deploy the project on any available free server like hiroku, etc.

To execute the app follow the instructions listed below:

Firstly clone the current project directory using the command: git clone https://github.com/sajaltikariha/FamPay-SpinWheelTask.git

A. If your system has docker already installed run the following commands in your linux based CLI:-
(1) Enter the project directory using: cd project_directory_name
(2) Enter docker up after build command to get container running: sudo docker-compose up -d --build
(3) This must create a URL that can be copied to browser to inspect the site exposed at port 3001 or you can directly use "http://localhost:3001".
(4) Enter docker stop to stop the container: sudo docker-compose stop

B. Do not have docker installed then run following commands in your linux based CLI:-
(1) Enter the project directory using: cd project_directory_name
(2) Install the dependencies using: npm install
(3) Execute the code in a localhost using: npm start
(4) This should redirect you to the localhost server at port 3000, if not you can directly use the url "http://localhost:3000".
(5) To exit the local server type: exit or ctrl^C to force stop.  
