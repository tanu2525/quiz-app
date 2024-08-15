Quiz Online is a full-stack interactive quiz application designed to allow users to take quizzes, see their scores. The application includes an admin panel for adding and managing quiz questions. The frontend is built using React, the backend with Spring Boot, and the data is stored in a MySQL database.

Technologies Used
Frontend: React, Bootstrap, Axios, React Router
Backend: Spring Boot, Spring Data JPA, Hibernate
Database: MySQL
Build Tools: Maven for backend, Vite for frontend
Other: Lombok, ESLint

Backend Setup
Create a Spring Boot Project:
Set up a new Spring Boot project using Maven. Include the following dependencies in pom.xml

Connect to MySQL Database:
Add MySQL database connection details in the application.properties file

Build and Run the Backend:

Use Maven to build the Spring Boot application.
Run the application using mvn spring-boot:run

Frontend Setup
Create a React Project:
Set up a new React project using Vite. Include the following dependencies in your package.json

Install Dependencies:
Run the following command to install all necessary dependencies:
npm install

Run the Frontend:
Start the frontend development server using:
npm run dev
