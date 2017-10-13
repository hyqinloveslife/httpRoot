/**
 * Created by Administrator on 2017/2/3 0003.
 */
function Cat (name,color) {
    this.name=name;
    this.color=color;
}
Cat.prototype.type='猫科动物';
Cat.prototype.eat=function () {
    alert('吃老鼠');
};