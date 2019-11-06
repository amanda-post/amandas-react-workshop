/* 

- This file does NOT need to be modified.

- This file is what serves up the html with bundle.js (compiled React) 
to your localhost server @ the port 3000. This is done using Node.js with Express. 

*/
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(port, () => console.log(`server is listening on port ${port}`));