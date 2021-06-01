function Calculator(a,b){
    this.a = a;
    this.b = b;
}

Calculator.prototype.add = function () {
    return (this.a + this.b);
}

Calculator.prototype.sub = function () {
    return (this.a - this.b);
}

Calculator.prototype.mult = function () {
    return (this.a * this.b);
}

Calculator.prototype.log = function () {
    console.log("The sum of " + this.a + " and " + this.b + " is: " + this.add());
    console.log("The substruction of " + this.a + " and " + this.b + " is: " + this.sub());
    console.log("The multiplication  of " + this.a + " and " + this.b + " is: " + this.mult());
}

var c1 = new Calculator(5,10);
var c2 = new Calculator(4,3);

c1.log();

setTimeout(function() {
    c1.log()},
    2000);