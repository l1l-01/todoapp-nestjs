# TodoApp

A small, minimal Todo application built with [NestJS](https://nestjs.com/), [EJS](https://ejs.co/), [Bulma](https://bulma.io/), and [PostgreSQL](https://www.postgresql.org/). Includes simple CRUD operations for todo items and a basic project structure to get started quickly.

## Features
- Create, read, update, and delete todo items
- Simple and clean UI with Bulma
- Backend powered by NestJS
- Data persistence with PostgreSQL

## Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [PostgreSQL](https://www.postgresql.org/download/) (v13 or higher)
- [NestJS CLI](https://docs.nestjs.com/cli/overview) (optional, for development)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/l1l-01/todoapp-nestjs.git
   cd todoapp-nestjs
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add the following environment variables:
   ```env
   DB_TYPE=postgres
   DB_HOST=your_database_host
   DB_PORT=your_database_port
   DB_USERNAME=your_database_username
   DB_PASSWORD=your_database_password
   DB_DATABASE=your_database_name
   DB_SYNCHRONIZE=true
   ```

4. Set up your PostgreSQL database and ensure it's running.

5. Start the application:
   ```bash
   npm run start:dev
   ```

## Usage
- Navigate to `http://localhost:3000` in your browser.
- Use the UI to create, view, update, or delete todo items.

## Project Structure
- `src/`: Contains the NestJS application code
- `views/`: EJS templates for the frontend
