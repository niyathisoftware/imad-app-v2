var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');


var config = {
    host :'db.imad.hasura-app.io',
    user : 'niyathisoftware',
    password : 'process.env.DB_PASSWORD',
    database : 'niyathisoftware',
    port : '5432'
};
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
        <P>${date.toDateString()}</P>
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

function hash(input, salt) {
    var hashed = crypto.pbkd2fSync(input, salt, 10000, 512. 'sha512');
    return ['pbkdf2',10000, salt, hashed.toString('hex')].join('$');
    
}


var Pool = new Pool(config);
app.get('/test_db', function (req, res) {
    post.query('SELECT * FROM test', function (err, result){
        if (err) {
            res.status('500').send(err,toString());
        } else {
            res.send(JSON.Stringigy(result,rows));
        }
        
    });
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter,toString());
});
    
var names = [];

app.get('/submit-name/', function (req, res) {
    var name = req.query.name;
    names.push(name);
    res.send(JSON.Stringify(names));
    
   
});

app.get('/articles/:articleName', function (req, res) {
   var articleName = req.param.articleName;
   pool.query("SELECT * FROM article where title = $1", req.params.articleName, function (req, res) {
       if (err) {
           res.status('500').send(err,toString());
       } else {
           if (result.rows.length === 0) {
               res.status('404').send('Article Not Found');
               } else {
                   var articleData = result.rows[0];
                   res.send(createTemplate(articleData));
               }
       }
});
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});


app.get('/ui/main.js', function (req, res) {
    res.sendFile(path.join(_dirname, 'ui', 'main.js'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
