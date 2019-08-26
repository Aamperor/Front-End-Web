/**
 * 访问对象属性方法：1.点表示法
 *                  2.方括号表示法（可以通过变量来访问属性）
 */
var person = {
    name: "stupid",
    age : "25"
}
var other = "name";
alert(person[other]); //"stupid"

/**
 * 数组的创建
 * length不是只读的，可以通过设置它移除或添加项
 * 检测数组：value instanceof Array / Array.isArray(value)
 */
var values = [1,2,]; //！这样会创建一个包含2或3个元素的数组
var options = [,,,,,]; //！这样会创建一个包含5或6个元素的数组

/**
 * 转换方法，所有对象都有toLocaleString(),toString(),valueOf()方法
 * toString():返回由数组中每个值的字符串形式拼接形成的以逗号分隔的字符串
 * valueOf():获得对象原始值，还是返回数组
 * toLocaleString():调用每个数组元素的toLocaleString()方法，使用
 * 地区特定的分隔符把生成的字符串连接起来，它会根据机器的本地环境来返回字符串，
 * 比如符合你本地格式的日期，数字等
 * join():接收一个参数来作为分隔符，来连接数组各项来构建字符串
 * 如果数组的某一项为null或者undefined，那么在四种方法中的返回结果均是空字符串
 */

 /**数组的栈方法
  * push():接收任意数量的参数，将它们逐个添加到数组末尾，并返回修改后的length
  * pop():移除数组末尾一项并返回移除的项
  */
 var colors = new Array();
 var count = colors.push("green","red","yellow"); //count = 3
 var item = colors.pop(); //item = yellow

 /**
  * 数组队列方法
  * shift():移除数组中的第一项并返回该项，同时数组长度减一，结合push可以实现先进先出
  * unshift():在数组前端添加任意个项并返回新数组的长度
  */
 var rem = colors.shift(); //rem = green,lenth = 1

 /**
  * 重排序方法
  * reverse():反转数组元素的顺序
  * sort():调用每个数组项的toString()方法，然后比较按升序排列，即使数组项是数值，比较的也是字符串！！
  *         比如0，1，15，5
  *         可以接收一个比较函数作为参数用来指定哪个值位于哪个值的前面
  */
 //这个比较函数适用于大多数数据类型,交换返回值后可以实现降序排列
 function compare(v1,v2){
     if(v1 < v2){
         return -1;
     }
     else if(v1 > v2){
         return 1;
     }
     else{
         return 0;
     }
 }
 var value = [0,1,5,15,28];
 value.sort(compare); //返回排序后的数值
 alert(value);//0,1,5,15,28
 //对于数值类型或者valueOf()返回数值的对象类型，可以使用下面简单的比较函数
 function comparesimple(v1,v2){
     return v2 - v1;
 }

 /**
  * 操作方法
  * concat():先复制当前数组，然后将参数添加到数组的末尾得到新数组并返回，如果没有参数则
  *             返回当前数组的副本
  * slice():截取当前数组的部分作为新数组，一个参数时返回参数指定位置到数组末尾的所有项
  *         如果有两个参数，则返回起始位置和结束位置之间不包括结束位置的项,但不影响原来的数组
  *         如果参数有负数则用数组长度加上该负数来确定位置
  *         结束位置小于起始位置返回空数组
  * splice():两个参数时，为要删除的第一项的位置和要删除的项数
  *         :三个或多个参数时，第一个为起始位置，第二个为要删除的项的个数（如果为0就是直接插入，正数就是替换），
  *          第三个以后为要插入或者替换的项（替换项可以多于删除项）
  */ 
 var cat = value.concat("3",["4,2"]); //0,1,5,15,28,3,4,2
 var one = value.slice(1); //1,5,15,28 数组从0开始
 var two = value.slice(1,4); //1,5,15


 /**
  * 位置方法
  * indexOf():接收两个参数，要查找的项和（可选）表示查找起点的索引,默认从数组开头（0）开始向后查找
  * lastIndexOf():接收两个参数，从数组末尾往前找
  * 两个方法都返回第一个查找项在数组中的位置，没有找到则返回-1，在比较第一个参数和数组中的项时使用===
  */
 /**
  * 迭代方法
  * every():对数组中每一项运行给定函数，每一项都返回true则返回true
  * filter():每一项运行给定函数，最后返回会返回true的项组成的数组
  * forEach():每一项运行给定函数，无返回值
  * map():每一项运行给定函数，返回每次函数调用的结果组成的数组
  * some():每一项运行给定函数，任一项返回true则返回true
  * 每个方法接收两个参数，运行函数以及运行函数的作用域对象（影响this）；运行函数接收三个参数，数组项
  * 的值，数组项位置，数组对象本身
  */
 var func = function(item,index,array){
    return (item > 2);
 }
 var numbers = [1,2,3,4,5];
 var everyResult = numbers.every(func);              //false
 var someResult = numbers.some(func);              //true
 var filterResult = numbers.filter(func);          //[3,4,5]
 var mapResult = numbers.map(function(item,index,array){
     return item * 2;
 });                 //[2,2,6,8,10]

/**
 * 归并方法
 * reduce():从数组第一项开始遍历
 * reduceRight():从数组最后一项开始往前遍历
 * 两个方法都接收两个参数，在每项上调用的函数和（可选）作为归并基础的初始值。调用的函数接收四个参数，
 * 前一个值，当前值，项的索引，数组对象。函数返回的任何值都会作为第一个参数自动传给下一项，迭代从数组
 * 第二项开始
 */
var sum = numbers.reduce(function(prev,cur,index,array){
    return prev + cur;
}); //15