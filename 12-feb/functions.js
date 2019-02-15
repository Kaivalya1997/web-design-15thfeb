//inner functions
function outer(){
    var company="sapient"; //variable
    this.company='IBM'; // property
    inner();
    function inner(){
        console.log(company);
        console.log(this.company);
        console.log('inner',this);
    } 
} 
outer();
