# Perfect Paws
Perfect Paws is a pert adoption website to help families find and apply to adopt their new best friend. 

This website will feature an easy to use administrator login for a owners of the company to add, remove, update pet listings. They will also be able to see application submissions from potential adopters. 

This is a full-stack development project created by dev-cody.

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
More to come!

API base URL: `/api/v1`

### Colors
| Method | Endpoint                    | Access Control | Description                                    |
| ------ | --------------------------  | -------------- | ---------------------------------------------- |
| GET    | `/colors`                   | All            | Gets all listed colors for pets                |
| POST   | `/colors`                   | All            | Add a new color for pets into the database     |
| DELETE | `/colors`                   | All            | Removes the color                              |
| PATCH  | `/colors`                   | All            | Updates the color                              |