/**ECMAScript提供了三个特殊引用类型Boolean,Number,String,每当读取一个基本类型，后台就会
 * 创建一个对应的基本包装类型的对象
 * 引用类型与基本包装类型的主要区别是对象的生存期，使用new创建的引用类型的实例，
 * 在执行流离开作用域之前一直保存在内存中，而自动创建的基本包装类型的对象只存在于
 * 一行代码的执行瞬间*/
var s1 = "some text";
s1.color = "red";
alert(s1.color);  //undefined,因为在执行本行代码时s1.color已经被销毁 

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


/**Boolean类型 */
var falseObject = new Boolean(false);
var res         = falseObject && true;  //true,布尔表达式中所有对象对会被转化为true
var falseValue  = false;
var resu        = falseValue && true;   //false

/**Number类型
 * toString():可以传递一个表示基数的进制参数，告诉函数返回几进制的字符串形式
 * toLocalString():
 * 两个方法返回字符串形式的数值
 * valueOf():返回对象表示的基本类型的数值
 * toFixed():传递一个参数，表示返回的小数位数，如果数值本身包含的位数小于指定位数用0补足，
 * 大于指定位数的话接近指定的最大小数位的值就会舍入
 * toExponential():接收一个参数用以指定输出结果中的小数位数，结果返回指数形式的数值的字符串
 * toPrecision():接收一个参数，表示数值的所有数字的位数（不包括指数部分），结果可能返回固定大小
 * 格式，也可能返回指数格式；也就是说会根据参数来决定调用toFixed()还是toExponential()
 */
var num = 10;
var numb = new Number(10);
alert(num.toFixed(2));  //"10.00"
alert(num.toExponential(1));  //"1.0e+1"
alert(num.toPrecision(1));  //"1e+2"
alert(num.toPrecision(3));  //"10.0"
var num1 = 10.005;
alert(num1.toFixed(2)); //"10.01"

/**与不建议显式创建Boolean一样，不建议直接实例化Number，因为typeof和instanceof测试
 * 基本类型数值和引用类型数值时，得到的结果完全不同 */
alert(typeof numb); //"object"
alert(typeof num); //"number"
alert(num instanceof Number); //false
alert(numb instanceof Number); //true

/**String 类型
 * toString()
 * toLocalString()
 * valueOf()都返回对象所表示的基本字符串值
 * length:字符串中包含多少字符(即使字符串包含双字节字符也算是一个字符)
 * charAt():接受一个参数指定要返回的字符在字符串中的位置，结果返回给定位置的字符
 * charCodeAt():接收一个参数指定返回字符位置，结果是返回指定位置字符的字符编码
 * 还可以用方括号加数字索引来访问指定位置字符串，相当于访问数组中的项
 * concat():将一个或多个字符串拼接起来然后返回拼接的字符串，但多数时候我们更多用+来拼接字符
 * slice():
 * substr():
 * substring():
 */
var stringValue = "hello world";
alert(stringValue.length); //"11"
alert(stringValue.charAt(1)); //"e"
alert(stringValue.charCodeAt(1)); //"101"    101是e的字符编码
alert(stringValue[1]); //"e"
