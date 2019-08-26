var now = Date();//调用Date构造函数而不传参数会自动获得当前日期
// 想要根据特定的时间日期创建对象必须传入表示日期的毫秒数
/**Date.parse():接收表示日期的字符串参数，然后返回相应的毫秒数，但是没有定义支持的日期格式，
 * 因此回因地区而不同
 * 以浏览器地区为美国为例："月/日/年";"英文月 日，年"等
 *  */ 
var someDate = new Date(Date.parse("May 25,2004"));
/**如果传入的字符串不能表示日期，返回NaN,也可以直接将表示日期的字符串传给Date(),
 * 它会在后台自动调用Date.parse()
 * 对于超出范围的值，不同的浏览器有不同的做法*/
 /**Date.UTC()也返回表示日期的毫秒数,它的参数分别是年，月（0-11），日（1-31），时（0-23），
  * 分，秒，毫秒，其中年和月是必须的，日默认1，其它默认0
  * Date()构造函数也会模仿Date.UTC(),但日期和时间都基于本地时区而不是GMT，接收参数一样 */

var start = Date.now();//Date.now返回调用这个方法时日期和时间的毫秒数
//func();
var stop = Date.now;
var result = stop - start;
//在不支持Date.now()的浏览器中可以使用操作符+获得时间戳
var start1 = +new Date();
var stop1  = +new Date();
var result1 = stop1 - start1;

/**继承的方法
 * toLocaleString():以浏览器设置的地区相应的格式返回日期时间
 * toString():返回带有时区信息的日期时间
 * valueOf():直接俄返回毫秒数（可以用于比较）
 */

 /**日期格式化方法
  * toDateString():显示星期、月、日、年
  * toLocaleDateString():
  * toTimeString():显示时、分、秒和时区
  * toLocaleTimeString():
  * toUTCString
  */
 /**日期时间组件方法
  * getTime():返回日期毫秒数
  * setTime(毫秒数)
  * getFulleYear/Month/Date/Hours/Minutes/Seconds/Milliseconds()
  * setFullYear/....
  * getUTCFullYear/....
  * setUTCFullYeat/...
  * getTimezoneOffset():返回本地时间和UTC时间相差的分钟数
  * UTC中月份为0-11
  */