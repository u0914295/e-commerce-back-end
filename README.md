# e-commerce-back-end

## Description
My motivation for building this application was to create a database that easily allows businesses to track their products through categories and tags. This allows for seamless tracking and adding or removing of inventory. I built this application to take advantage of object-relational mapping's (ORM) powerful advantage of eliminating the need for repititive SQL code, reducing development costs and superceding vendor-specific SQL differences (ORM can write vendor-specific SQL so you don't have to). 

This application eliminates the need for a programmer to take the time to learn ORM, increasing company productivity. It also simplifies the development and maintenance of database applications. From building this application, I learned just how quickly one can speed up the process of transferring data from database tables into objects. 

## Installation
To run this application, you need to follow these steps:

1. **Install Dependencies**: Run `npm install` in your terminal to install the required dependencies.

2. **Environment Setup**: Create a `.env` file in the root directory and replace 'username' and 'password' in the following lines with your MySQL credentials:

```env
DB_NAME='ecommerce_db'
DB_USER='username'
DB_PASSWORD='password'
```

3. **Seeding the Database**: In order to seed the database, run `npm run seed`.

4. **Starting the Server**: Run `npm start` in the terminal to start the server. Once complete, the terminal should state the server is listening.

## Usage
You can use Insomnia Core or any other API client to test the API Routes. Here are the routes that you can test:

- `GET /api/products`, `GET /api/products/:id`
- `GET /api/categories`, `GET /api/categories/:id`
- `GET /api/tags`, `GET /api/tags/:id`
- `POST /api/products`
- `POST /api/categories`
- `POST /api/tags`
- `PUT /api/products/:id`
- `PUT /api/categories/:id`
- `PUT /api/tags/:id`
- `DELETE /api/products/:id`
- `DELETE /api/categories/:id`
- `DELETE /api/tags/:id`

These endpoints allow you to perform CRUD operations for products, categories, and tags. To see a walkthrough video showing how to install and use this application, please click on the following link:

https://drive.google.com/file/d/1OmAB8lVSGuJEHnfDMhbuw-PIyRPbMsaq/view?usp=sharing

