import app from './app'

const port = process.env.PORT || 8080;

app.listen(port);
console.log('Server successfull started, listening on port,', port);