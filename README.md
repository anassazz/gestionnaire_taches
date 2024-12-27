# Task Management API :

This project is a Task Management API built using Node.js, Express.js, and MongoDB. It provides CRUD (Create, Read, Update, Delete) functionality for managing tasks.

 ## Features :

Create Task: Add a new task with a title and description.

Read Tasks: Fetch all tasks or a specific task by ID.

Update Task: Modify the details of an existing task.

Delete Task: Remove a task by its ID.

Error Handling: Proper responses and status codes for success and errors.

 ## Prerequisites :

Ensure you have the following installed:

Node.js (v14 or higher recommended)

MongoDB (ensure it is running locally or provide a remote connection URL)

Installation

#### Clone the repository:
```
git clone <repository-url>
```
#### Navigate to the project directory:
```
cd task-management-api
```
#### Install dependencies:
```
npm install
```
Start the MongoDB server locally or ensure your remote MongoDB instance is running.

 ## Usage :

Start the server:

node server.js

By default, the server will run on ``http://localhost:3000.``

Use an API testing tool like Postman or cURL to interact with the API.

## Endpoints :

1. Create a Task

POST /api/tasks

Request Body:

{
  ``"title": "Sample Task",``
  ``"description": "This is a sample task description."``
}

Response:

{
 `` "message": "Data sent successfully"``
}

2. Get All Tasks

GET /api/tasks

Response:

[
  {```
    "_id": "63c8a7b0e4b0a1a234567890",
    "title": "Sample Task",
    "description": "This is a sample task description.",
    "completed": false
  }```
]

3. Update a Task

``PUT /api/tasks/:id``

Request Body:

{
  "title": "Updated Task",
  "description": "Updated description.",
  "completed": true
}

Response:

{
  "message": "Data updated successfully"
}

4. Delete a Task

DELETE /api/tasks/:id

## Response:

{
  ``"message": "Data deleted successfully"``
}

### Project Structure :

```project-directory
├── models
│   └── Task.js        # Task schema
├── routes
│   └── tasks.js       # Task routes
├── server.js          # Main server file
├── package.json       # Project metadata and dependencies
├── README.md          # Project documentation
```
## Contributing :

Contributions are welcome! Please fork the repository and submit a pull request.

## License :

This project is licensed under the MIT License. See the LICENSE file for details.

