const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

// GET all Documents
const getDocuments = (request, response) => {
  client.query('SELECT * FROM document ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

// POST new Document
const createDocument = (request, response) => {
  const { text, title , owner_id, parent_id} = request.body

  client.query('INSERT INTO document (title, text, owner_id, parent_id) VALUES ($1, $2, $3, $4)',
    [title, text, owner_id, parent_id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).send(`New Document titled ${1} was added`)
  })
}

// Export function to be used by index.js
module.exports = {
  getDocuments,
  createDocument
}