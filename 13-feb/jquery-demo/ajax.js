function getOrder(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            document.getElementById("payload").innerHTML= this.responseText;
            console.log(this.responseText);
        }
    };
    xhr.open("GET","orders.json");
    xhr.send(); //async call
    console.log('logic');
}