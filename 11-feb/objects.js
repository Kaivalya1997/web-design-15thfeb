// var user=new Object();
// user.name="KD";
// user.age=10;
// console.log(user);

/*
//another way of defining objects
// var user={
//     //name:'kaivalya'
// }; //JSON way of defining objects
// user.weight=50;
// console.log(user);
// delete user.weight;
// console.log(user);

// function generateUsers(){
//     var users=[];
//     var obj=[];
//     for(var i=0; i<10; i++){
//         obj[i]=new Object();
//          obj[i].name=i;
//          obj[i].age=10*i;
//         users.push(obj[i] );
//     }
//     return users;
// }
// var users=generateUsers();
// //sort
// users.sort(function(user1,user2){
//     return user2.age-user1.age;
// })
// console.log(users);
*/

/*
//composite objects

var user={
    name:"ram",
    age:34,
    addresses:[{
        street:'1st main',
        zip:200
    },{
        street:'2nd main',
        zip:300
    }],
    walk: function(){ //method
        console.log(this.name+" is walking...");
    }
}
console.log(user.addresses[1].street);
user.walk();
*/

//----------------------------------------------
// //namespace
// var com={};

// com.foo= function(){
//     console.log('1');
// }

// function foo(){
//     console.log('2');
// }
// foo();
// com.foo();
//-------------------------------------------

