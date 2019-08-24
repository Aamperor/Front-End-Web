/**不带圆括号的函数命是访问函数指针，而非调用函数 
 * 一个函数可以有多个名字，将其中一个名字设置为null后仍然可以通过其他函数名来访问
 * js中函数没有重载，后声明的会将前面声明的覆盖
 * 函数声明和函数表达式；函数声明提升
*/
alert(sum(0,10));
var sum = function(n1,n2){
    return n1 + n2;
};        //执行时会报错，因为函数位于初始化语句而不是一个函数声明

/**函数可以作为参数传递给另外一个函数，也就是将函数名（指针）作为参数传进去
 * 也可以从一个函数中返回另一个函数
 */
function createComparisonFunction(propertyName){
    return function(o1,o2){
        var v1 = o1[propertyName];
        var v2 = o2[propertName];

        if(v1 < v2){
            return -1;
        }
        else if(v1 > v2){
            return 1;
        }
        else{
            return 0;
        }
    };
}
var data = [{
    name: "Zachary",
    age : 28
},
{
    name: "Nicholas",
    age : 29
}];
data.sort(createComparisonFunction("name"));
alert(data[0].name);

/**函数内部属性
 * argument:类数组对象，包含传入函数中的所有参数，主要用途保存参数，此外它还有一个callee属性
 * this    :引用的是函数执行的环境对象，在网页全局作用域中就是window
 */
function fac(num){ //计算阶乘
    if(num <=1){
        return 1;
    }
    else{
        return fac(num - 1);
        // return num * arguments.callee(num - 1);
    }
}
/**一般情况下我们使用递归调用函数本身，但是如果将函数指针指向另外一个函数就不能完成函数的调用了
 * 比如
 *      var facc = fac;
 *      fac = function(){
 *          return 0;
 *       }
 * 那么上面计算阶乘的函数便不能实现了，使用callee属性可以避免对函数本身的调用,
 * 这样facc()就能正常计算阶乘
 */

 window.color = "red";
 var o        = {color: "blue"};
 function getColor(){
     alert(this.color);
 }    

getColor();  //"red",相当于windoW.getColor();
o.getColor = getColor;
o.getColor();  //"blue"
// 由于函数的名字仅仅只是一个包含指针的变量，即使在不同的执行环境中，window.getColor()
// 和o.getColor()指向的是同一个函数

/**
 * caller:保存调用当前函数的函数的引用，如果在全局中调用当前函数则为null
 * 
 */
function outer(){
    inner();
};
function inner(){
    alert(inner.caller); //显示outer()函数的源码
    // alert(arguments.callee.caller);也可以通过arguments.callee.caller访问
}