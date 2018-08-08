const path = require('path');

const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, '../public'); //'path.join' help in getting the directory directly without any unneccesary path
// console.log(publicPath);
// console.log(__dirname + '/../public');
app.use(express.static(publicPath));

app.listen(3000, () => {
    console.log(`Server is up on port ${port}`);
});


