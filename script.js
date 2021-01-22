
const input = document.querySelector("#addelement");
const  btn = document.querySelector("#plus");
const list = document.querySelector("#elements");
var el = document.getElementsByTagName('li');
btn.onclick = function(){
    
    var txt = input.value;
    if(txt ==''){
        alert('Add something');
    }else{
        li = document.createElement('li');
    li.innerHTML = txt;
    elements.insertBefore(li,elements.childNodes[0]);
    input.value = '';
    }
    
};
elements.onclick = function(ev){
    if(ev.target.tagName == 'LI'){
         ev.target.classList.toggle('checked');
    }
};
