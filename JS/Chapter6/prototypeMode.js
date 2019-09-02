/**创建的每个函数都有一个prototype属性，它是一个指针，指向一个对象，
 * 而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法 */
function Person(){};
Person.prototype.name = "x";
Person.prototype.age = "223";
Person.prototype.sayName = function(){
    alert(this.name);
};
var person1 = new Person();
person1.sayName(); //"x"
var person2 = new Person();
person2.sayName(); //"x"
alert(person1.sayName == person2.sayName); //true

/**创建自定义构造函数之后，原型对象默认得到constructor属性，而其他方法都是从Object继承而来
 * 当调用构造函数创建一个实例以后，实例的内部将包含一个指针，指向构造函数的原型对象，
 * 这个指针叫[[Prototype]],在脚本中没有标准的方式访问[[Prototype]],但是firefox,safari,chrome
 * 在每个对象上都支持一个属性__proto__,而在其他实现中，这个属性对脚本完全不可见
 * 
 * 虽然所有实现中都无法访问到[[Prototype]],但可以通过isPrototypeOf()方法
 * 来确定对象之间是否存在这种关系
 * 
 */
alert(Person.prototype.isPrototypeOf(person1));  //true






/**ES5中的Object.getPrototypeOf()在所有支持的实现中返回[Prototype]的值 */
alert(Object.getPrototypeOf(person1) == Person.prototype); //true







/**每次代码读取某个对象的某个属性时都会执行一次搜索，目标是具有给定名字的属性，首先从实例本身开始，
 * 如果在实例中找到则返回，否则继续搜索指针指向的原型对象，在原型对象中查找具有给定名字的属性
 * 
 * 原型最初只包含constructor，该属性也是共享的，也可以通过实例访问
 * 
 * 虽然可以通过实例访问原型中的属性，但不能通过对象实例重写原型中的值；如果在实例中添加一个属性
 * 与原型中某个属性同名，那么原型中的属性会被屏蔽，也就是说实例中的同名属性会阻止我们访问原型中的
 * 属性，但不会修改原型中的属性
 * 
 * 而使用delete操作符可以删除实例中的同名属性从而恢复对原型中的的同名属性的访问
 * 
 * 使用hasOwnProperty()方法可以检测一个属性存在实例中还是原型中（方法从Object中继承来）；
 * 只有在给定属性存在于实例中时才会返回true
 */

 /**原型与in操作符
  * in操作符有两种使用方法：单独使用和在for-in中使用
  * 在单独使用时，in会在通过对象能够访问到给定属性时返回true，无论属性实在实例还是在原型中
  */
 alert("name" in person1); //true
 alert(person1.hasOwnProperty("name"));//false   通过in和hasOwnProperty()可以知道name在原型中
function hasPrototypeProperty(object,name){
    return !object.hasOwnProperty(name) && (name in object);
}
hasPrototypeProperty(person1,"name"); //true


/**在使用for-in循环时，返回的是所有能通过对象访问的、可枚举属性，
 * 屏蔽了原型中不可枚举属性的实例属性也会被返回，因为根据规定，所有开发人员定义的属性都是可枚举的 
 * 
 * 
 * 在IE中，其实现认为如果原型的方法或属性被打上了值为false的[[Enumerable]]标记，
 * 就应该在for-in中跳过该属性，因此会影响所有默认不可枚举的属性和方法，包括hasOwnProperty(),
 * propertyIsEnumerable(),toLocaleString(),toString()和valueOf();
 * 
 * ES5也将constructor和prototype属性的[[Enumerable]]设置为false,但是要看浏览器的实现情况*/

 /**要取得对象上所有可枚举属性，可以使用ES5的Object.keys(),它接收一个对象作为参数，
  * 返回一个包含所有可枚举属性的字符串数组 
  * 
  * 对于实例来说只返回自身具有的属性，而不返回原型有的而自身没有的属性？
  * 
  * Object.getOwnPropertyNames(): 返回所有实例属性，无论是否可枚举
  */
 function Pers(){}
Pers.prototype.name = "x";
Pers.prototype.age = "223";
Pers.prototype.job = "stu";
Pers.prototype.sayName = function(){
    alert(this.name);
};
var keys = Object.keys(Pers.prototype); //"name,age,job,sayName"
var pers1 = new Pers();
pers1.age =36;
pers1.name = "cc";
var key1 = Object.keys(pers1); //"age,name"

/**更简单的原型语法 */
function Resume(){}
Resume.prototype = {
    name: "xx",
    age: 3,
    job: "no"
};
/**最终结果都相同，除了constructor不再指向Resume;在这里的语法本质上是重写默认的prototype属性，
 * 因此constuctor也就变成了新对象的属性（指向Object构造函数），如果constructor很重要可以
 * 直接定义将它设置为合适值，但此时会导致它的[[Enumerable]]特性变为true，因为默认情况下，原生的
 * constructor是不可枚举的
 * 在兼容ES5的引擎下可以试着用Object.defineProperty()来设置
 *

 /**原型的动态性
  * 由于在原型中查找值得过程是一次搜索，因此对原型所做的任何修改都能立刻从实例反映出来，
  * 即使是先创建实例然后修改原型也是这样
  * 
  * 但是尽管可以随时为原型添加属性和方法，并且修改能够立即在所有的对象实例中反映出来，
  * 如果重写了整个原型，结果就会不一样了。因为调用构造函数时会为实例添加一个指向最初原型的[[Prototype]]指针，
  * 而把原型修改为另外一个对象就等于切断了构造函数与最初原型之间的联系，它们引用的仍然是最初的原型，记住
  * 
  *
  * 实例中的指针仅指向原型，而不指向构造函数
  * 
  * 
  * 
  * 
  * 
  */

  /**原生对象的原型
   * 通过原生对象的原型，不仅可以取得所有默认的方法的引用，而且也可以定义新方法，就像修改自定义对象
   * 的原型一样修改原生对象的原型
   * 
   * 但是我们不建议这样做，因为会导致命名冲突或者意外重写原生方法
   */
  String.prototype.startsWith = function(text){
      return this.indexOf(text) == 0;
  };
  var msg = "Hello world";
  alert(msg.startsWith("Hello")); //true

  /**原型对象的问题
   * 1.所有实例在默认情况下都具有相同属性值，某种程度会带来不便
   * 2.一个实例对Person.prototype对象属性的改变会造成另外一个实例继承自Person.prototype的同名属性的改变
   * 
   */

/**组合使用构造函数模式和原型模式
 * 构造函数模式用于定义实例属性，原型属性用于定义方法和共享的属性
 * */ 

function Perso(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
}
Person.prototype = {
    constructor: Perso,
    sayName: function(){
        alert(this.name);
    }
}
var perso1 = new Perso("c",23,"pro");
new perso2 = new Perso("g",69,"stu");

/**动态原型模式：把所有相信息封装在构造函数中，必要时通过在构造函数中初始化原型；
 * 也就是说可以通过检查某个应该存在的方法是否有效来决定是否粗腰初始化原型
 */

function Persos(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    if(typeof this.sayName != "function"){  //只有在方法不存在的情况下才会将它添加到原型
        Persos.prototype.sayName = function(){  //代码只在初次调用构造函数时执行
            alert(this.name);   //使用原型模式时不能使用对象字面量重写原型，否则会切断现有实例与
        };                     //新原型之间的联系
    }
}

/**寄生构造函数模式：创建一个函数，函数的作用仅是封装创建对象的代码，然后返回新创建的对象
 * 返回的对象与在构造函数外部创建的对象没有什么不同，也就不能依赖instanceof来确定对象类型
 */
function Persoss(name,age,job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    return o;
}
var frined = new Persoss(); //除了使用new以外和使用工厂模式一样

/**稳妥构造函数模式
 * 稳妥对象： 没有公共属性，其方法不引用this的对象；适用于安全环境（这些环境会禁用this和new）或者
 * 防止数据被其它应用程序改动时使用
 * 稳妥构造函数遵循与寄生构造函数类似的模式，但是：1）新创建对象的实例方法不引用this;2）不使用
 * new操作符调用构造函数
 */
function Pre(name,age,job){
    //创建要返回的对象
    var o = new Object();
    //定义私有变量和函数

    //添加方法
    o.sayName = function(){
        alert(name);
    };
    return o;
}