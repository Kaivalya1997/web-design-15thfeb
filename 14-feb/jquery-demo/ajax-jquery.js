

$('#name').keydown(function(e){
    if (e.keyCode === 13) { // If Enter key pressed
        $('#ajax').click();
    }
});

var errorMessage=$('#error_message');
errorMessage.hide();

function getOrder(event){
    errorMessage.hide();
    $("#tracks").empty();
    
    var tracks=$('#tracks');
    var name=$('#name');
    var frontpartURL="https://itunes.apple.com/search?term=";
    var url=frontpartURL+name.val();
    //console.log(url);
    $.ajax(url,{
        success: function(response){
            // console.log(JSON.parse(response).results[0].trackName); 
            $("#caption").empty();
            if (JSON.parse(response).results[0] == null) {  $("#caption").text('No tracks found.'); }
            else{
                var count=1;
                $( "#caption" ).text("Most popular tracks:");
                (JSON.parse(response).results).forEach(function (element) {
                    //console.log(element.trackName);
                    var row = $('<li>');
                    row.html(element.trackName);
                    tracks.append(row);
                    localStorage.setItem(count, element.trackName);
                    count++;
                });
                count=0;
            }
        },
        headers:{
             apiToken:"crazyDude",
             Location:"Bangalore"
        },
        error: function(error){
            errorMessage.show();
        } ,
        method: "POST"
    });
}
 
var bgcolor='background-color';

    function validate(event){
        console.log(event.target.value);
        var elem=$(event.target);
        if(event.target.value===""){
           // event.target.style.backgroundColor="red";    //  javascript code
           elem.css(bgcolor,"red"); //jquery code
        }
        else{
            // event.target.style.backgroundColor="green";    //  javascript code
            elem.css(bgcolor,"yellow"); //jquery code
        }
       
    }
    //errorMessage.hide();
   
    // function myMove() {
    //     var elem = document.getElementById("animate");   
    //     var pos = 0;
    //     var id = setInterval(frame, 5);
    //     function frame() {
    //       if (pos == 350) {
    //         clearInterval(id);
    //       } else {
    //         pos++; 
    //         elem.style.top = pos + "px"; 
    //         elem.style.left = pos + "px"; 
    //       }
    //     }
      