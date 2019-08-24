/**ECMAScript提供了三个特殊引用类型Boolean,Number,String,每当读取一个基本类型，后台就会
 * 创建一个对应的基本包装类型的对象
 * 引用类型与基本包装类型的主要区别是对象的生存期，使用new创建的引用类型的实例，
 * 在执行流离开作用域之前一直保存在内存中，而自动创建的基本包装类型的对象只存在于
 * 一行代码的执行瞬间*/
var s1 = "some text";
s1.color = "red";
alert(s1.color):  //undefined,因为在执行本行代码时s1.color已经被销毁 

/**可以显式地调用Boolean，Number，String来创建基本包装类型的对象。
 * 对基本包装类型的实例调用typeof会返回“object"，而且所有的基本包装类型的对象
 * 在转换为Boolean类型时都是true
 * Object构造函数会像工厂方法一样，根据传入值的类型返回相应基本包装类型的实例。
 */
var obj = new Object("some text");
alert(obj instanceof String);    //true

/**使用new调用基本包装类型的构造函数，与直接调用同名的转型函数是不一样的
 * 下例中，变量number中保存的是基本类型的值25，而obj中保存的是Number的实例
 */
var value = "25";
var number = Number(value);  //转型函数
alert(typeof number);   //"number"

var obj = new Number(value);
alert(typeof obj);    //"object"