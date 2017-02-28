var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles = {
    
    'article-one' : {
    title : "Ram Test1",
    heading : "Heading1",
    date: "Feb 20, 2017",
    content : "This is Ram Kris1"},
    
    'article-two' : {
    title : "Ram Test2",
    heading : "Headin2g",
    date: "Feb 20, 2017",
    content : "This is Ram Kris2"},
    
    'article-three' : {
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
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter,toString());
});
    

app.get('/:articleName', function (req, res) {
   var articleName = req.param.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/main.js', function (req, res) {
    res.sendFile(path.join(_dirname, 'ui', 'main.js'));
});

var names = [];

app.get('/submit-name/', function (req, res) {
    var name = req.query.name;
    names.push(name);
    res.send(JSON.Stringify(names));
    
   
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
