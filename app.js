
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(express.json());

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Belajar API',
      version: '1.0.0',
      description: 'Dokumentasi API menggunakan Swagger'
    },
    servers: [
      {
        url: 'http://localhost:3000'
      }
    ]
  },
  apis: ['./app.js']
};

const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Menampilkan daftar pengguna
 *     responses:
 *       200:
 *         description: Berhasil menampilkan data pengguna
 */
app.get('/users', (req, res) => {
  res.json([
    { id: 1, nama: 'Vivian' },
    { id: 2, nama: 'Andi' }
  ]);
});

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
