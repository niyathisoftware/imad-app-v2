console.log('Loaded!');

var element = document.getElementById('counter');
var counter = 0;
button.onClick = function () {
    counter = counter + 1;
    var span - document.getElementById('count');
    span.innerHTML = counter.toString();
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