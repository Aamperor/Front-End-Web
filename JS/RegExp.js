/**通用表达式为/pattern/flags
 * 其中flags为三个标志以及它们的组合：g(全局)，i(不分大小写)，m(多行)，gi,....
 * 使用元字符必须转义，字符包括
 * ([{\^$|?*+.}])
 */
var expression = /\.at/ig;
/**也可以使用构造函数来创建表达式，它接收两个参数，一个是要匹配的字符串，一个是标志字符串 */
var pat = new RegExp("/\.\^at/","mi");
/**由于构造函数的参数是字符串，所以某些情况下要对字符进行双重转义，所有元字符和
 * 已经转义过的字符都要进行双重转义，比如\n在字符串中被转义为\\n，在正则表达式字符串中就会成\\\\n*/
var ex1 = /\[bc\]at/i;
var ex2 = new RegExp("\\[bc\\]at","i");
var ex3 = /\w\\hello\\123/;
var ex4 = new RegExp("\\w\\\\hello\\\\123");

/**RegExp实例属性
 * global:布尔值，是否设置了g标志
 * ignoreCase:
 * multiline:
 * lastIndex:整数，表示开始搜索下一个匹配项的字符位置，从0算起
 * source:正则表达式的字符串表示，按字面量形式返回
 */
alert(ex1.source);  // "\[bc\]at" 
alert(ex2.source);  // "\[bc\]at"
/**RegExp实例方法
 * exec():接受一个参数，也就是要应用模式的字符串，返回包含第一个匹配项信息的数组或者null
 * 返回的数组除了array本身属性还包含两个额外的属性index和input,index表示匹配项在字符串中的位置，
 * input表示应用正则表达式的字符串，在数组中，第一项是与整个模式匹配的字符串，其它项是
 * 与模式中的捕获组匹配的字符串（如果有，没有的话数组只有一项）
 * 
 * 对于exec()方法而言，即使设置全局标识g，每次只会返回一个匹配项。如果不设置g，在同一个字符串上
 * 多次调用该方法始终返回第一个匹配项的信息，lastIndex不变；设置g后每次会继续查找新的匹配项，
 * RegExp的lastIndex会变
 * 但是在IE下即使不设置g，lastIndex也会变
*/
var text = "mom and dad and baby";
var pattern = /mom( and add( and baby)?)?/gi;
var match = pattern.exec(text);

alert(match.index); //0
alert(match.input);  //"mom and dad and baby"
alert(match[0]);   //"mom and dad and baby"
alert(match[1]); //"and dad and baby"
alert(match[2]);  //and baby

/**其它方法
 * test():接收一个字符串参数，模式与参数匹配返回true,否则false,用于验证用户输入
 * toString():返回正则表达式的字面量，与创建表达式的方式无关
 * toLocalString():同上
 */
alert(ex1.toString());  //  /\[bc\]at/i

/**RegExp构造函数属性
 * 属性名包括常属性名和短属性名，有些短属性名Opera和IE不支持
 * input($_):最近一次要匹配的字符，Opera不支持
 * lastMaetch($&):最近一次的匹配项，Opera不支持
 * lastParen($+):最近一次匹配的捕获组，Opera不支持
 * leftContext($`):input字符串中lastMatch之前的文本
 * multiline($*):布尔值，表示是否所有表达式都使用多行模式，IE和Opera不支持
 * rightContext($'):input字符串中lastMatch之后的文本
 * 
 * 由于短属性名不是有效的ECMAScript标识符，因此必须通过方括号语法来访问他们 
 */

 var text = "this has been a short summer";
 pattern = /(.)hort/g;

 if(pattern.test(text)){
     alert(RegExp.input);  //this has been a short summer;
     alert(RegExp["$`"]);  //this has been a
     alert(RegExp.rightContext);  //summer
     alert(RegExp.lastMatch); //short
     alert(RegExp.lastParen); //s
     alert(RegExp.multline);  //false
 }

 /**此外还有9个用于存储捕获组的属性，分别为RegExp.$1到RegExp.$9,用于存储第一到第九个匹配的捕获组
  * 在调用exec()和test()时会自动填充
 */