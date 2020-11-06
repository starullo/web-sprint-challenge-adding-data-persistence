require('dotenv').config();
const server = require('./server.js');

const PORT = process.env.PORT || 4555;

server.listen(PORT, () => {
    console.log('all good on port ' + PORT)
})
