# Getting Started with Tailor

::: warning COMPATIBILITY NOTE
Tailor requirements (Node version, etc.)
:::

## Local installation

1. Obtain a copy of the Tailor repository.

2. Enter the repository directory and run:
``` sh
npm install
```
This will install all the packages required for the app to function properly.

3. Create a blank PostgreSQL database for the project. You do not need to create any tables.

4. If you do not have a `.env` file in the app root, create a copy of the existing `.env.example` file and rename it to `.env`. Set the database configuration in the `.env` file, the easiest way being:
``` sh
DATABASE_URI=postgres://username:password@your_host:db_port/db_name
```
Example: `postgres://myUsername:myPassword123@localhost:1234/tailor`

5. To prepare your database for work, run:
``` sh
npm run db:reset
```
This will populate the database with the tables required by the Tailor app. The command can also be run if you want your existing database data to be purged; it will recreate the table structure and leave the tables blank.

6. To add filler data to the database (for development purposes), run:
``` sh
npm run db:seed
```
To manually create admin users, you can use the following command:
``` sh
npm run add:admin <email> <password>
```
Example: `npm run add: admin myAdmin@test.com test12345!`

## Server deployment

``` sh
TODO: Deployment steps
```

## Sample configuration

``` json
TODO: Configuration steps
```
