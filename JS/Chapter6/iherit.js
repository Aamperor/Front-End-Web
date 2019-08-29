/**ES只支持实现继承，依靠原型链来实现
 * 构造函数，原型和实例的关系： 每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，
 * 实例都包含一个指向原型对象的内部指针
 */
//实现原型链的基本模式
function SuperType(){
    this.property = true;  //实例属性
}

SuperType.prototype.getSuperValue = function(){ //所有实例共享属性
    return this.property;
};

function SubType(){
    this.subproperty = false;  //实例属性
}

SubType.prototype = new SuperType(); //作为SuperType的一个实例，SubType.prototype既有
                                     //自己的property属性(SubType.prototype.property)，
                        //也有共享的getSuperValue()方法(SubType.prototype.getSuperValue),
                                     //因此所有的SubType的实例都将获得这两个属性和方法

SubType.prototype.getSubValue = function(){//SubType所有实例共享的方法
    return this.subproperty;
};

var instance = new SubType();//作为SubType的实例，instance首先有自己的subproperty属性（false）和
                             //getSubValue()方法；然后因为SubType.prototype有property属性和
                    //getSuperValue()方法，于是instance具有getSuperValue()方法和property属性

alert(instance.getSuperValue());   //但是此时instance.constructor指向的是SuperType,因为SubType的
                                  //原型指向了SuperType的原型，而这个原型对象的constructor属性指向的
                                  //是SuperType
/**事实上，所有引用类型默认都继承了Object,这个也是通过原型链实现的；
 * 所有函数的默认类型都是Object的实例，因此默认原型都会包括一个内部指针指向Object.prototype,
 * 这也是为什么所有自定义类型都会继承toStrinig()、valueOf()等默认方法的根本原因
 */

 /**确定原型和实例的关系
  * 1）instanceof:只要用这个操作符测试实例与原型链中出现过的构造函数，结果都是true
  * 2）isPrototypeOf():只要是原型链中出现过的原型，都可以说是该原型链所派生的实例的原型，结果都是true
  */
 alert(instance instanceof Object);
 alert(instance instanceof SubType);
 alert(instance instanceof SuperType);
 alert(Object.prototype.isPrototypeOf(instance));
 alert(SubType.prototype.isPrototypeOf(instance));
 alert(SuperType.prototype.isPrototypeOf(instance));  //都是true

 /**通过原型链实现继承时，不能使用对象字面量来创建原型方法，因为这样会重写原型链，然后切断原型链 */

 /**原型链问题
  * 1.包含引用类型值的原型属性会被所有实例共享，这也是为什么要在构造函数中而不是原型对象中定义属性
  * 在通过原型来实现继承时，原型实际上会变成另一个类型的实例，于是原来的实例属性也就变成了原型属性
  * 2.创建子类型的实例时，不能向超类型的构造函数中传递参数
  */

  /**借用构造函数：在子类型构造函数的内部调用超类型构造函数，而由于函数只是在特定环境下执行的
   * 代码，因此可以通过apply()和call()在将来新创建的对象上执行构造函数
   */

 function First(){
     this.colors = ["red","blue","green"];
 }

 function Second(){
     //继承First
     First.call(this);
 }

 var example1 = new Second();
 example1.colors.push("black");
 alert(example1.colors); //"red,blue,green,black"

 var example2 = new Second();
 alert(example2.colors);  //"red,blue,green"