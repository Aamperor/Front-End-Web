/**工厂模式：用函数来封装以特定接口创建对象 */
function createPerson(name,age,job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    return o;
}
var person = createPerson("x",22,"stu");

/**构造函数模式,定义在Global中 */
function Person(name,age,job){ //Person大写字母开头，按照惯例构造函数以大写字母开头，而非构造则小写
    this.name = name;
    this.age = age;
    this.job = job;
}
var person1 = new Person("x",22,"stu");  //必须使用new操作符
//person1有一个constructor属性，改属性指向Person
alert(person1.constructor == Person); //true
//person1既是Object实例，因为所有对象均继承自Object;也是Person实例，可以通过instancef得到验证
console.log(person1 instanceof Object);  //true
console.log(person1 instanceof Person);//true

  /**任何函数，只要通过new 操作符来调用那它就可以作为构造函数，而任何函数，
   * 如果不通过new操作符来调用，那它跟普通函数没区别 */