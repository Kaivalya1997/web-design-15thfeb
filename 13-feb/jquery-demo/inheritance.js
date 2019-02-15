function User(name, age) {
    this.name = name; // acts like a private variable

    this.age = age; // acts like a public variable
    console.log(this);

}
User.prototype.walk = function () {
    console.log(this.name + " is walking...")
}
var u1 = new User('KD', 21);
u1.walk();