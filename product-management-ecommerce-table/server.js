const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const router = require('./router/router');
require('dotenv').config();
postgres.connect();
const PORT = process.env.PORT || 3000;



app.use(express.json({
  limit:"10mb"
}));

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
