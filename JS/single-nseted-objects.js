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