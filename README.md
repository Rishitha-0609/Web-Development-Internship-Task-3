# Book Management REST API

This is a simple REST API for managing a list of books. It provides basic CRUD (Create, Read, Update, Delete) operations. The project is built with Node.js and Express, and it uses an in-memory array to store the book data, so no database is required.

This project is intended to demonstrate the fundamentals of building a REST API, including routing, handling different HTTP methods, and managing JSON data.

## Tools Used

*   **Node.js**: A JavaScript runtime environment.
*   **Express.js**: A minimal and flexible Node.js web application framework.
*   **Postman**: An API platform for building and using APIs.
   
## Project Setup in Your Terminal
mkdir book-api
cd book-api
npm init -y
npm install express
-->run this commands in terminal
## run project
node index.js
You should see the output: Server is running on http://localhost:3000

## Postman Installation
https://www.postman.com/downloads/
download yo windows 
open postman 
After open Postman click on + icon near getting started on top middle of the screen

1. GET /books (Return all books)
Method: GET
URL: http://localhost:3000/books
Action: Click "Send".
Result: You should see the initial array of three books in the response body.


2. POST /books (Add a new book)
Method: POST

URL: http://localhost:3000/books

Action:

Go to the "Body" tab.

Select "raw" and choose "JSON" from the dropdown.

Enter the following JSON in the text area:


{
    "title": "Brave New World",
    "author": "Aldous Huxley"
}

Click "Send".
Result: You will get the new book object back with id: 4 and a status of 201 Created. Run the GET request again to see it in the list.


4. PUT /books/:id (Update a book)

Method: PUT

URL: http://localhost:3000/books/2 (We are updating the book with ID 2)

Action:

Go to the "Body" tab.

Select "raw" and "JSON".

Enter the following JSON to update the book's title:

{
    "title": "To Kill a Mockingbird - Revised",
    "author": "Harper Lee"
}

Click "Send".
Result: You will get the updated book object back. Run the GET request again to verify the change.

6. DELETE /books/:id (Remove a book)

Method: DELETE

URL: http://localhost:3000/books/1 (We are deleting the book with ID 1)

Action: Click "Send".

NOTE: In background the server should be run the only the requests will work (Output will be shown in postman not in web Browser
