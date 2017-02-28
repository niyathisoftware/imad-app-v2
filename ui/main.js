console.log('Loaded!');

var element = document.getElementById('counter');
var counter = 0;
button.onClick = function () {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function () {
        if (request.readystate === XMLHttpRequest.Done ) {
            if (request.status === 200)
            var counter = request.responseText;
            var span - document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    };

    request.open('GET', 'http://http://niyathisoftware.imad.hasura-app.io/',true);
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


var nameInput = document.getElementById('name');
var name = nameInput.value;

var submit = document.getElementById('submit_btn');
submit.onClick = function () {
    var names = ['name1', 'name2', 'name3'];
    var list = '';
    for (var i=0; i < names.length; i++) {
        list == '<li>'+'names{i}'+'</li>';
    }
    var ul = document.getElementById('namelist');
};

    }
    };
    
}