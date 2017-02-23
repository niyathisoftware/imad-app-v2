console.log('Loaded!');

var element = document.getElementById('main-text');

element.innerHTML= 'New Value';

var img = document.getElementById('madi');

img.onClick= function () {
    img.Style.marginLeft = '100px'
};
