/**除了Object、Array、String以外ECMA还定义了两个单体内置对象Global和Math
 * Global：所有在全局作用域中定义的属性和函数，都是Global对象的属性，除此之外它还有以下属性
 *          encodeURI()和encodeURIComponent()可以对URI进行编码以便发送给浏览器，它们用特殊的
 *          UTF-8编码替换所有无效的字符（比如空格），从而让浏览器理解和接收
 *          encodeURI(): 主要用于整个URI，它不对对本身属于URI的字符进行编码，如: / ? #
 *          decodeURI(): 只能对使用encodeURI()替换的字符进行解码
 *          encodeURIComponent(): 主要用于URI中的某一段,他会对发现的任何非标准字符进行编码
 *          decodeURIComponent():可以解码任何特殊字符的编码
 * eval():只接受一个参数，也就是要执行的ECMAScript或JavaScript字符串。解析器发现eval()方法时
 * 会将它传入的参数当作实际的ECMAScript语句来解析，然后把执行结果插入原位置，
 * 通过eval()执行的代码可以引用在包含环境中定义的变量
 *          
 *  */
var msg = "jello worls"
eval("alert(msg)"); //"jello worls"  
/**变量msg是在eval()调用的环境之外定义的但其中国调用的alert()仍能够显示，
 * 这是因为第二行代码最终被替换成了一行真正的代码，同样的，也可以在eval()调用中定义一个函数，
 * 然后再该调用的外部代码中使用，变量也一样 */
eval("function sayHi(){alert('hi');}");
sayHi();    //可以执行
/**在eval()中创建的任何变量或者函数都不会被提升，因为在解析代码的时候他们被包含在一个字符串中，
 * 它们只在eval() 执行的时候被创建
 * 严格模式下外部访问不到eval()中创建的任何变量或者函数，为eval()赋值也会导致错误
 * 使用eval()时要谨慎，尤其是在执行用户输入数据的情况下，否则有可能被恶意用户进行代码注入
 * Global还包括其它一些属性，除了所有原生引用类型的构造函数，特殊值（NaN,undefined,etc)以外，
 * 还有Error等。ECMAScript5明确禁止给NaN,undefined,Infinity赋值*/

 //取得Global对象
 var global = function(){
     return this;
 }();
 /**创建了一个立即调用的函数表达式，返回this的值。在没有给函数明确指定this的情况下，
  * 无论是通过将函数添加为对象的方法还是通过调用call()apply(),this值等于Global对象 */

  /**Math对象
   * 它包含的属性大都是数学计算中可能会用到的一些特殊值
   * Math.E : e的值
   * Math.LN10 : 10的自然对数
   * Math.LN2 ：2的自然对数
   * Math.LOG2E :以2为底e的对数
   * Math.LOG10E :以10为底E的对数
   * Math.PI : π的值
   * Math.SQRT1_2 : 1/2的平方根
   * Math.SQRT2 : 2的平方根
   * 
   * 方法
   * min():
   * max(): 都可以接收任意个数值参数
   * 
   * ceil():向上舍入
   * floor():向下舍入
   * round():四舍五入
   * 
   * random():返回0-1之间的一个随机数，可以用于站点随机显示新闻
   */

   //获得数组中的最值
   var values = [1,2,3,4,5];
   var max = Math.max.apply(Math,values); //把Math设置为第一个参数从而正确设置this

   //从某个整数范围内随机选择一个值 value = Math.floor(Math.random()*可能值总数 + 第一个可能数)
   /**其他方法 */
