const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getYear',() => {
  return new Date().getFullYear();
});
hbs.registerHelper('screamIt',(text) => {
  return text.toUpperCase();
});
app.set('view express','hbs');

app.use((req, res, next) => {
  console.log('Running ',req.method);
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

app.use(express.static(__dirname+'/public'));

app.get('/', (request, response) => {
  //response.send('Hello Express!');
  response.render('home.hbs',{
    pageTitle: 'Home Page Here',
    welcomeMessage: 'Welcome to brand new Website'
  });
});

app.get('/about',(request, response) => {
  response.render('about.hbs',{
    pageTitle: 'About Page Here'
  });
});

app.get('/project',(req, res) => {
  res.render('projects.hbs',{
    url:'https://github.com/jayanthilamoni/node-webserver';
  })
});

app.get('/bad',(req, res) => {
  res.send({
    status: 400,
    error: 'Page not found!'
  });
});

app.listen(port,() => {
  console.log('Server is up at 3000');
});
