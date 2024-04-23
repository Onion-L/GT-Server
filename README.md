
# GT Server

**GT Server** is the backend server for **GameTrack**, responsible for handling backend interfaces and connecting to the MongoDB database. The project utilizes the Koa framework and mongoose library to implement its functionalities.

## Features

- Provides RESTful APIs for frontend data interaction.
- Manages and connects to MongoDB database.

## Technology Stack

- **Koa**: A modern node.js web framework used for building servers and middleware.
- **Mongoose**: An object data modeling (ODM) library for MongoDB, designed to work in an asynchronous environment.

## Installation Guide

To install **GT Server**, ensure that Node.js and MongoDB are installed on your system. Then, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd GT-Server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the Project

To start the server, run:

```bash
npm run serve
```

This will start the server locally, typically listening on port 3000.

## Usage Examples

Provide some basic API call examples to help users understand how to interact with the server, for instance:

```bash
curl -X GET http://localhost:3000/api/games
```

## Contribution Guide

Contributions are welcome. If you would like to contribute, please:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.
