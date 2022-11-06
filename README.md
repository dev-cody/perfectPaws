# Perfect Paws Documentation

## Getting Started

### Client
Client not setup yet

* * * 

### Server
The server is build with NodeJS and a MySQL database


- Clone this repo
- **npm install** to install all required dependencies

Running this locally would require a MySQL database instance

### Server Endpoints
The base URL for the server endpoints is `/api/v1`
More to come!

#### Monitoring
| Method | Endpoint                    | Access Control | Description                                  |
| ------ | --------------------------- | -------------- | -------------------------------------------- |
| GET    | `/`                         | All            | Returns a message indicating server is up    |

### Colors
| Method | Endpoint                    | Access Control | Description                                    |
| ------ | --------------------------  | -------------- | ---------------------------------------------- |
| GET    | `/colors`                   | All            | Gets all listed colors for pets                |
| POST   | `/colors`                   | All            | Add a new color for pets into the database     |
| DELETE | `/colors`                   | All            | Removes the color                              |
| PATCH  | `/colors`                   | All            | Updates the color                              |