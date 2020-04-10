'use strict'
var image = document.querySelector('img');
var array = ['images/bg.jpg','images/pic01.jpg','images/pic02.jpg','images/pic03.jpg','images/pic04.jpg','images/pic05.jpg','images/pic06.jpg','images/pic07.jpg','images/pic08.jpg'];

left.addEventListener('click',function(){
    var index = array.indexOf(image.getAttribute('src'));
    if(index == 0){
        image.src = 'images/pic08.jpg'
    }else{
        image.src = array[index-1]
    }
})
right.addEventListener('click',function(){
    var index = array.indexOf(image.getAttribute('src'));
    if(index == 8){
        image.src = 'images/bg.jpg'
    }else{
        image.src = array[index+1]
    }
})