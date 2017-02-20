var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    
    article-one : {
    title : "Ram Test1",
    heading : "Heading1",
    date: "Feb 20, 2017",
    content : "This is Ram Kris1"},
    
    article-two : {
    title : "Ram Test2",
    heading : "Headin2g",
    date: "Feb 20, 2017",
    content : "This is Ram Kris2"},
    
    article-three : {
    title : "Ram Test3",
    heading : "Heading3",
    date: "Feb 20, 2017",
    content : "This is Ram Kris3"}
};




function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;

var htmlTemplate = `
<html>
  <head>
    <title>${title};</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="/ui/style.css" rel="stylesheet" />

  </head>
  <body>
      <div class="container">
          
     
      <div>
          <a href="/" >Home</a>
      </div>
      <div> 
        <P>${date}</P>
        <P>${content}</P>

      </div>
      </div>
  </body>
</html>
`;
 return htmlTemplate;
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
   var articleName = req.param.articleName;
  res.send(createTemplate(articles[:articleName]));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/article-one', function (req, res) {
  res.send('article one is requested and served here');
});

app.get('/article-two', function (req, res) {
  res.send('article two is requested and served here');
});

app.get('/article-three', function (req, res) {
  res.send('article three is requested and served here');
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
