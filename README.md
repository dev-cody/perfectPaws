# Perfect Paws
Perfect Paws is a pert adoption website to help families find and apply to adopt their new best friend. 

This website will feature an easy to use administrator login for a owners of the company to add, remove, update pet listings. They will also be able to see application submissions from potential adopters. 

This is a full-stack development project created by dev-cody.

## Getting Started

### Client
The frontend of the website is a React app with TypeScript using Vite.

* * * 

### Server
The server is build with NodeJS and a MySQL database.


- Clone this repo.
- **npm install** to install all required dependencies.

Running this locally would require a MySQL database instance.

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

### Breeds
| Method | Endpoint                    | Access Control | Description                                    |
| ------ | --------------------------  | -------------- | ---------------------------------------------- |
| GET    | `/breeds`                   | All            | Gets all listed breeds from database           |
| POST   | `/breeds`                   | All            | Add a new breed into the database              |
| DELETE | `/breeds`                   | All            | Removes the selected breed                     |
| PATCH  | `/breeds`                   | All            | Updates the selected breed                     |

### Customers
| Method | Endpoint                    | Access Control | Description                                    |
| ------ | --------------------------  | -------------- | ---------------------------------------------- |
| GET    | `/customer`                 | All            | Gets all of all customers                      |
| POST   | `/customer`                 | All            | Add a new customer intot he database           |
| DELETE | `/customer`                 | All            | Removes the selected customer                  |
| PATCH  | `/customer`                 | All            | Updates the selected customer                  |

### Pets
| Method | Endpoint                    | Access Control | Description                                    |
| ------ | --------------------------  | -------------- | ---------------------------------------------- |
| GET    | `/pets`                     | All            | Gets a list of all pets from database          |
