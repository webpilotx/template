# Template Project

This is a template project using Express.js and Vite.

## Features

- Serves static files from the `dist` directory.
- Configurable via environment variables.
- Includes a basic Express.js server.

## Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd template
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Create a `.env` file in the root directory and configure the following variables:
   ```
   PORT=3000
   ```

## Development

To start the development server:

```bash
pnpm dev
```

## Build

To build the project for production:

```bash
pnpm build
```

## Production

This project builds the client-side using Vite and serves the static files from the `dist` directory as the frontend. The server is started using `node index.js`, which also handles serving the API.

To start the production server:

```bash
node index.js
```

If the `PORT` variable is not specified in the `.env` file, the default port is 3000.

Ensure the `dist` directory is built before starting the server.

## License

This project is licensed under the MIT License.
