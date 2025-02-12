# Sinsajo

Sinsajo is a Twitter clone, a modern alternative to the social network, built with cutting-edge technologies to provide a fast and smooth experience.

![Sinsajo Screenshot](public/screenshot.jpg)

## Technologies

- **Next.js 15** - React framework for modern web applications.
- **ShadCN** - Stylish UI components with Tailwind CSS.
- **Drizzle ORM** - Lightweight and efficient ORM for TypeScript.
- **NeonBase** - Cloud-optimized Postgres database.
- **PostgreSQL** - Robust and scalable relational database.
- **BetterAuth** - Modern and secure authentication system.

## Installation

Clone the repository and navigate to the project directory:

```sh
git clone https://github.com/himelmaj/sinsajo.git
cd sinsajo
```

Install dependencies:

```sh
pnpm install
```

Configure environment variables in a `.env` file:

```env
DATABASE_URL=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
```

Run database migrations:

```sh
pnpm drizzle:push
```

Start the development server:

```sh
pnpm dev
```

## Features

- Real-time posts and comments.
- Authentication and authorization system.
- Intuitive and accessible interface.
- Cloud-scalable database.

## Contributing

If you want to contribute to the project, please open an issue or submit a pull request.

## License

This project is licensed under the MIT license.

