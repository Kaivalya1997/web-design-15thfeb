$(function (){
    var button=$('#button');
    button.on('click',save);
    var elem= $('#firstname'); //like getElementId
    var age= $('#age');
    
    var users=$('#users');   
function save(){
    //console.log(event);
    //var elem= $('#firstname'); //like getElementId
    //elem.prop( "disabled", true );
    //elem.prop( "disabled", !elem.prop( "disabled") );//toggle textbox
    //console.log(elem.val());
    var row= $('<li>');
    var deletebtn=$('<button>');
    var gender= $('[name="gender"]:checked'); //returns an array element which is checked radio button
    deletebtn.click(function(event){
        console.log(event.target);
        $(event.target).parent().remove();
    })
    deletebtn.text('X');
 
    row.text("Name is "+elem.val()+", Age is "+age.val()+", Gender is "+gender.val());
    row.append(deletebtn);
   
    users.append(row);
    }
   
   
   
}
)