/**创建的每个函数都有一个prototype属性，它是一个指针，指向一个对象，
 * 而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法 */
function Person(){};
Person.prototype.name = "x";
Person.prototype.age = "223";
Person.prototype.sayName = function(){
    alert(this.name);
};
var person1 = new Person();
person1.sayName(); //"x"
var person2 = new Person();
person2.sayName(); //"x"
alert(person1.sayName == person2.sayName); //true

/**创建自定义构造函数之后，原型对象默认得到constructor属性，而其他方法都是从Object继承而来
 * 当调用构造函数创建一个实例以后，实例的内部将包含一个指针，指向构造函数的原型对象，
 * 这个指针叫[[Prototype]],在脚本中没有标准的方式访问[[Prototype]],但是firefox,safari,chrome
 * 在每个对象上都支持一个属性__proto__,而在其他实现中，这个属性对脚本完全不可见
 * 
 * 虽然所有实现中都无法访问到[[Prototype]],但可以通过isPrototypeOf()方法
 * 来确定对象之间是否存在这种关系
 * 
 */
alert(Person.prototype.isPrototypeOf(person1));  //true






/**ES5中的Object.getPrototypeOf()在所有支持的实现中返回[Prototype]的值 */
alert(Object.getPrototypeOf(person1) == Person.prototype); //true







/**每次代码读取某个对象的某个属性时都会执行一次搜索，目标是具有给定名字的属性，首先从实例本身开始，
 * 如果在实例中找到则返回，否则继续搜索指针指向的原型对象，在原型对象中查找具有给定名字的属性
 * 
 * 原型最初只包含constructor，该属性也是共享的，也可以通过实例访问
 * 
 * 虽然可以通过实例访问原型中的属性，但不能通过对象实例重写原型中的值；如果在实例中添加一个属性
 * 与原型中某个属性同名，那么原型中的属性会被屏蔽，也就是说实例中的同名属性会阻止我们访问原型中的
 * 属性，但不会修改原型中的属性
 * 
 * 而使用delete操作符可以删除实例中的同名属性从而恢复对原型中的的同名属性的访问
 * 
 * 使用hasOwnProperty()方法可以检测一个属性存在实例中还是原型中（方法从Object中继承来）；
 * 只有在给定属性存在于实例中时才会返回true
 */

 /**原型与in操作符
  * in操作符有两种使用方法：单独使用和在for-in中使用
  * 在单独使用时，in会在通过对象能够访问到给定属性时返回true，无论属性实在实例还是在原型中
  */
 alert("name" in person1); //true
 alert(person1.hasOwnProperty("name"));//false   通过in和hasOwnProperty()可以知道name在原型中
function hasPrototypeProperty(object,name){
    return !object.hasOwnProperty(name) && (name in object);
}
hasPrototypeProperty(person1,"name"); //true


/**在使用for-in循环时，返回的是所有能通过对象访问的、可枚举属性，
 * 屏蔽了原型中不可枚举属性的实例属性也会被返回，因为根据规定，所有开发人员定义的属性都是可枚举的 
 * 
 * 
 * 在IE中，其实现认为如果原型的方法或属性被打上了值为false的[[Enumerable]]标记，
 * 就应该在for-in中跳过该属性，因此会影响所有默认不可枚举的属性和方法，包括hasOwnProperty(),
 * propertyIsEnumerable(),toLocaleString(),toString()和valueOf();
 * 
 * ES5也将constructor和prototype属性的[[Enumerable]]设置为false,但是要看浏览器的实现情况*/

 /**要取得对象上所有可枚举属性，可以使用ES5的Object.keys(),它接收一个对象作为参数，
  * 返回一个包含所有可枚举属性的字符串数组 */
 function Pers(){};
Pers.prototype.name = "x";
Pers.prototype.age = "223";
Pers.prototype.job = "stu";
Pers.prototype.sayName = function(){
    alert(this.name);
};
var keys = Object.keys(Pers.prototype); //"name,age,job,sayName"
var pers1 = new Pers();
pers1.age =36;
pers1.name = "cc";
var key1 = Object.keys(pers1); //"age,name"