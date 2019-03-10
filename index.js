const http = require('http');
const { inspect } = require('util');
const mongoose = require('mongoose');
const { get } = require('lodash');
const app = require('./app');
const { MONGODB_URI, PORT } = require('./config');

const opts = { colors: true, depth: Infinity };
mongoose.promise = Promise;

(async function () {
    try {
        const db = await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
        console.log(inspect({ "MongoDB connected on port": get(db, 'connections.0.port', 'disconnected') }, opts));
        const server = http.createServer(app);
        server.listen(PORT, () => console.log(inspect({ "Server listening on port": PORT }, opts)));
    } catch (err) {
        console.error(inspect(err, opts));
        process.exit(1);
    }
}());
