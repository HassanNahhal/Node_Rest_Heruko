# Node_Rest_Heruko

A simple REST application that uses Node, Express, and a PG client to push or retrieve objects (Documents in my case) to a 
remote PG database deployed on Heruko. Both the app and the db are deployed to Heruko to allow remote access of getting or 
creating a new Document.


index.js is the starting point that runs the app and set it to listen on process.env.PORT, Heruko's port, then initiates a 
client form pg that will serve GET and POST API's to users.
