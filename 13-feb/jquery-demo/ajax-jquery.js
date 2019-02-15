

$('#name').keydown(function(e){
    if (e.keyCode === 13) { // If Enter key pressed
        $('#ajax').click();
    }
});



function getOrder(event){
    $("#tracks").empty();
    
    var tracks=$('#tracks');
    var name=$('#name');
    var frontpartURL="https://itunes.apple.com/search?term=";
    var url=frontpartURL+name.val();
    console.log(url);
    $.ajax(url,{
        success: function(response){
            // console.log(JSON.parse(response).results[0].trackName); 
            $("#caption").empty();
            if (JSON.parse(response).results[0] == null) {  $("#caption").text('No tracks found.'); }
            else{
                $( "#caption" ).text("Most popular tracks:");
                (JSON.parse(response).results).forEach(function (element) {
                    //console.log(element.trackName);
                    var row = $('<li>');
                    row.html(element.trackName);
                    tracks.append(row);
                });
            }
        },
        method: "POST"
    });
  
   
}