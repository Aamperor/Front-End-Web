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
 * toLocaleString():
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
 * toLocaleString()
 * valueOf()都返回对象所表示的基本字符串值
 * length:字符串中包含多少字符(即使字符串包含双字节字符也算是一个字符)
 * charAt():接受一个参数指定要返回的字符在字符串中的位置，结果返回给定位置的字符
 * charCodeAt():接收一个参数指定返回字符位置，结果是返回指定位置字符的字符编码
 * 还可以用方括号加数字索引来访问指定位置字符串，相当于访问数组中的项
 * concat():将一个或多个字符串拼接起来然后返回拼接的字符串，但多数时候我们更多用+来拼接字符
 * slice():
 * substr():
 * substring():
 * 都返回被操作字符串的一个子字符串，都接受一或两个参数，第一个指定子字符串起始位置，第二个参数表示
 * 字字符串结束位置。slice()和substring第二个参数指定的是子字符串最后一个字符后面的位置，而substr()
 * 得第二个参数指定返回的字符个数。如果没有指定第二个参数，则将字符串的末尾作为结束
 * 
 * 如果传入的参数是负数，slice()会将负数与字符串的长度相加
 *                     substring()会将所有负值转换为0
 *                     substr()会将第一个负参数与字符串长度相加，第二个负参数转换为0
 */
var stringValue = "hello world";
alert(stringValue.length); //"11"
alert(stringValue.charAt(1)); //"e"
alert(stringValue.charCodeAt(1)); //"101"    101是e的字符编码
alert(stringValue[1]); //"e"


/**字符串位置方法 
 * indexof():
 * lastIndexOf():
 * 都接收两个参数，要查找的字符串和开始查找的位置，
 * 都返回给定子字符串在字符串中的位置，一个往后找，一个往前找
 * 可以通过循环调用来找到全部符合条件的子字符串
*/
alert(stringValue.indexOf("o",6));  //7 从位置6（字母w）开始找，找到world中的o位置是7
alert(stringValue.lastIndexOf("o",6));  //4,从位置6(w)向前搜索找到hello的o
/**trim():创建字符串的副本，删除前置和后缀的空格，然后返回结果
 * trimLeft():Firefox3.5+,Safari5+,Chrome8+支持
 * trimRight():Firefox3.5+,Safari5+,Chrome8+支持
 */
var varr = "   hello world     ";
alert(varr.trim()); //"hello world"

/**字符串大小写转换
 * toLowerCase():
 * toLocaleLowerCase():
 * toUpperCase()：
 * toLocaleUpperCase():少数语言会为Unicode大小写转换应用特殊的规则
 */

 /**字符串模式匹配方法
  * match():接受一个参数，正则表达式或者RegExp对象，结果返回一个数组
  * 字符串上调用match()本质上和RegExp调用exec()相同。返回的数组的第一项
  * 是与整个模式匹配的字符串，之后的每一项保存着与正则表达式中的捕获组匹配的字符
  * search():接收一个参数，由字符串或者RegExp对象指定的一个正则表达式；之后从开头向后查找，
  * 返回字符串中第一个匹配项的索引，没有则返回-1
  * replace():接收两个参数，一个是RegExp对象或者字符串（不是正则表达式），
  * 另一个是一个字符串或者一个函数。如果第一个参数是字符串那么只会替换第一个子字符串，要
  * 想替换所有的子字符串，唯一的办法是提供一个正则表达式且指定全局标志g
  * 如果第二个参数是字符串，还可以使用特殊字符序列将正则表达式操作得到的值插入到结果字符中
  *    字符序列   替换文本
  *     $$          $
  *     $&          同RegExp.lastMatch
  *     $'          同RegExp.leftContext
  *     $`          同RegExp.rightContext
  *     $n          n为0-9，匹配第n个捕获组的子字符串，如$1匹配第一个捕获组的子字符串，如果RegExp中
  *                     没有定义捕获组就是用空字符串
  *     $nn         第01-99个捕获的子字符串，没有定义就用空字符串
  * 如果第二个参数是函数，在只有一个匹配项的情况下会向函数传递三个参数：模式的匹配项，
  * 模式匹配项在字符串中的位置，原始字符串
  * 
  * split():基于指定的分隔符将一个字符串分割成多个字符串，并将结果放在一个数组中；
  * 分隔符可以是字符串，也可以是RegExp对象（此方法中不会将字符串看成正则表达式），第二个参数可选，用于
  * 指定返回数组的大小
  */
 var text = "cat,bat,sat,fat";
 var pose = text.search(/at/);  //1
 
 var resul = text.replace("at","ond"); //"cond,bat,sat,fat"
 var result = text.replace(/at/g,"ond"); //"cond,bond,sond,fond"
 var Re = text.replace(/(.at)/g,"word($1)");  //word(cat),word(bat),word(sat),word(fat)

 function htmlEscape(text){
     return text.replace(/[<>"&"]/g,function(match,pos,originalText){
         switch(match){
             case "<": return "&lt ";
             case ">": return "&gt ";
             case "&": return "&amp ";
             case "\"": return "&quot "; 
         }
     });
 }
 var out = htmlEscape("<p class=\"greeting\">hello</p>");//&lt p class=&quot greeting&quot &gt hello&lt /p&gt 

var colorText = "red,blue,green,yellow";
var c2 = colorText.split(",",2);
var c3 = colorText(/[^\,]+/);

/**localeCompare():比较两个字符串，并返回下列值中的一个：
 *  比较字符串和参数在字母表中的位置，字符串位置靠前返回负数，靠后返回正数，两者位置一样返回0
 * 实现所支持的地区（国家和语言）决定了这个方法的行为，比如是否区分大小写
 * fromCharCode():与charCodeAt()执行相反的操作，接收一或多字符的编码，然后将他们转换成一个字符串
 */
var stringValue = "yellow";
alert(stringValue.localeCompare("brick"));  //1