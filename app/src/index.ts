import express, { Express, Request, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import apiRouter from './router';

const app: Express = express()
const port: number = 3000

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Brainy Quotes Scrapper",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Muhammad Owais",
        url: "https://github.com/rahneverd",
        email: "rahneverd@gmail.com",
      },
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const specs = swaggerJsdoc(options);



app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);
app.use('/', apiRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})