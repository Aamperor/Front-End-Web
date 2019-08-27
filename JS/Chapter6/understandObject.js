/**数据属性
 * [[Configurable]]:表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，
 *                  能否把属性修改为访问器属性
 * [[Enumerable]]: 能否通过for-in循环返回属性，直接在对象上定义的属性默认为true
 * [[Writable]]: 能否修改属性的值，直接在对象上定义的属性默认为true
 * [[Value]]: 包含这个属性的数据值，默认为undefined,直接在对象上定义的属性就是定义的值
 * 
 * 要修改默认的特性，要使用Obeject.defineProperty()方法，此方法接收三个属性，属性所在的对象，
 * 属性名和一个描述符对象，描述符对象为以上四种中一种
 */
var person = {};
Object.defineProperty(person,"name",{
    configurable: false, //不能从对象中删除属性，若对其调用delete,非严下不会发生什么，严格模式下
                        //会导致出错，而且一旦设置为不可配置便不能变回可配置
    writable: false,  //value只读，若为它指定新值，非严格模式下会被忽略，严格模式下会抛出错位
    value: "Nicholas"
});

/**访问器属性
 * [[Configurable]]:同数据属性
 * [[Enumerable]]:同数据属性
 * [[Get]]: 在读取属性时调用的函数，默认值为undefined
 * [[Set]]: 在写入属性时调用的函数，默认为undefined
 * 访问器属性只能通过Object.defineProperty()定义
 */
var book ={
    _year: 2004, //_year前面的下划线是一种常用记号表示只能通过对象方法访问的属性
    edition: 1
}
Object.defineProperty(book,"year",{
    get: function(){
        return this._year;
    },
    set: function(newValue){
        if(newValue > 2004){
            this._year = newValue;
            this.edition += newValue -2004;
        }
    }
});
book.year = 2005;
alert(book.edition); //2,这是访问器属性的常见方式，通过设置一个属性的值会导致其它属性发生变化
/**不一定要同时设置get和set,只设置get以为属性不能写，尝试写入属性会被忽略，严格模式下则会抛出错误；
 * 只设置set意味着不能读，非严模式下会返回undefind,严格模式下会抛出错误
 */

 /**定义多个属性
  * 第一个参数为要设置属性的对象，第二个参数为包含属性和描述符
   */
 Object.defineProperties(book,{
     _year: {
         writable: true,
         value: 2004
     },
     edition: {
         writable: true,
         value: 1
     },
     year: {
         get: function(){
             return this._year;
         },
         set: function(newValue){
             if(newValue > 2004){
                 this._year = newValue;
                 this.edition += newValue -2004;
             }
         }
     }
 });

 /**读取属性的特性
  * Object.getOwnPropertyDescriptor():接收两个参数，属性所在的对象，要读取描述符的属性名称；
  * 返回一个对象，如果是访问器属性就包含c、e、g、s，如果是数据属性就包括c e w v
  * 
  * 要的到原型属性的描述符，必须直接在原型对象上调用Object.getOwnPropertyDescriptor()
  */