var numbers = [3, 2, 5, 10, 56, 84];
// console.log(numbers.length);
// numbers.push(13);
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.splice(0,1);
// console.log(numbers);
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);
// filter function
/* var evenindexelems=numbers.filter(function(elem,index){
//     console.log(elem,index);
//     return (index%2);
// });
// console.log(evenindexelems);
*/

// map function
/* var result= numbers.map(function(elem,index){
   // return elem+1;
});
console.log(result);
console.log(numbers);
*/

//incrementing with for loop
/* var incremented = [];
for (var count = 0; count < numbers.length; count++) {
    incremented.push(numbers[count] + 1);
}
console.log(incremented);
*/
