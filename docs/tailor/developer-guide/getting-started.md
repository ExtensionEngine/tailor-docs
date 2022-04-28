# Getting Started

## Dependencies

- Node.js (>= 12.13.0)
- npm (>= 6.11.0)
- PostgreSQL (>= 9.4)

## Installation

### Prerequisites

- Node.js & npm: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
- PostgreSQL: [https://www.postgresql.org/download/](https://www.postgresql.org/download/)
- Clone this repo: [https://github.com/ExtensionEngine/tailor](https://github.com/ExtensionEngine/tailor)

### Setup

- Run `npm install` in the repo directory
- Create a database in PostgreSQL
- Application is configured via environment variables contained in a file named
  `.env`. Use the `.env.example` file as a template: `cp .env.example .env` and
  enter configuration details.
- Initialize database by running `npm run db migrate`
- Enable default repository schema by setting env variable `ENABLE_DEFAULT_SCHEMA=1` or
define a custom one (more details [in the configuration section](./configuration.md)).
- You can create admin user by running `npm run add:admin <email> <password>`
- App branding is configured via values set in a file named `.brandrc` (or
  `.brandrc.js`). Use the `.brandrc.example` file as a template: `cp
  .brandrc.example .brandrc` and enter configuration details (Optional).

## Launch

### Development

- Server: `npm run dev:server`
- Client (webpack dev server): `npm run dev:client`

### Production

- Bundle client by issuing `npm run build`
- `npm run start`