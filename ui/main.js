console.log('Loaded!');

var element = document.getElementById('counter');
var counter = 0;
button.onClick = function () {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function () {
        if (request.readystate === XMLHttpRequest.Done ) {
            if (request.status === 200)
            var names = request.responseText;
            names = JSON.parse.names;
            for (var i=0; i < names.length; i++) {
        list == '<li>'+'names{i}'+'</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
        }
    };

    request.open('GET', 'http://http://niyathisoftware.imad.hasura-app.io/submit-name?name='+ name,true);
    request.send(null);
  
    
};



var element = document.getElementById('main-text');

element.innerHTML= 'New Value';

var img = document.getElementById('madi');


var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
    
}


img.onClick= function () {
    var Interval = setInterval (moveRight,100);
    
};



    }
    };
    
}