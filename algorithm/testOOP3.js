/**
 * Created by Administrator on 2017/2/3 0003.
 */

var tom=new Cat('Tom','yellow');
var jerry=new Cat('Jerry','black');
console.log(tom);
console.log(jerry);

console.log("判断是否指向同一个内存地址");
console.log(tom.eat==jerry.eat);
console.log('这个方法用来判断，某个proptotype对象和某个实例之间的关系');
console.log(Cat.prototype.isPrototypeOf(tom));
console.log(Cat.prototype.isPrototypeOf(jerry));
console.log('每个实例对象都有一个hasOwnProperty()方法，用来判断某一个属性到底是本地属性，还是继承自prototype对象的属性。');
console.log(tom.hasOwnProperty("name"));
console.log(jerry.hasOwnProperty("type"));
console.log('in运算符可以用来判断，某个实例是否含有某个属性，不管是不是本地属性。');
console.log('name' in tom);
console.log('sex' in tom);
console.log('in运算符还可以用来遍历某个对象的所有属性。');
for(var prop in tom){
    console.log('tom['+prop+']='+tom[prop]);
}