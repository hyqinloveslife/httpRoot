/**
 * Created by Administrator on 2017/2/3 0003.
 */
/** 面相对象的继承 */
function Animal () {
    this.species="动物";
}
function Dog (name,color) {
    Animal.apply(this,arguments);
    this.name=name;
    this.color=color;
}
var dog1=new Dog('大黄','黄色');
alert(dog1.species);