function save(event){
    var nameDomElem=document.getElementById('name');
   // var nameDomElem=document.getElementsByTagName('input')[0];
   //var nameDomElem=document.getElementsByName('firstname')[0];
    //nameDomElem.disabled = true;
    // nameDomElem.disabled = !nameDomElem.disabled;
    console.log('clicked..',nameDomElem.value);
    console.log(event);
    event.stopPropagation();
}
function foo(){
    console.log('div click handler');
}