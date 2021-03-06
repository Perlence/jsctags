```js
// number tests

var x = Math.PI;
x. //+ toExponential, toPrecision, toString, toFixed

Math.cos(x). //+ toExponential, ...

var a = [1, 2, 3]; 
a[0]. //+ toExponential, toPrecision, toString, toFixed

var y = a.slice(2);
y[0]. //+ toExponential, toPrecision, toString, toFixed

var z = [].reduce(function(a, b) { return a - 2; }, 0);
z. //+ toExponential, toPrecision, toString, toFixed, ...

var n = Math.cos.call(null, 10); 
n. //+ toExponential, toPrecision, toString, toFixed

var m = 10 - "1";
m. //+ toExponential, toPrecision, toString, toFixed

var k = m;
k. //+ toExponential, toPrecision, toString, toFixed

var l = (function () { return { x: 10, y: 100 }; })().x;
l. //+ toExponential, toPrecision, toString, toFixed

var a2 = parseInt("2");
a2. //+ toExponential, toPrecision, toString, toFixed

var a3 = parseFloat("1.5");
a3. //+ toExponential, toPrecision, toString, toFixed

var a4 = Number("10");
a4. //+ toExponential, toPrecision, toString, toFixed

var a5 = (2 > 1) ? 10: 200;
a5. //+ toExponential, toPrecision, toString, toFixed

var b1 = Number.POSITIVE_INFINITY;
b1. //+ toExponential, toPrecision, toString, toFixed

Math.acos(-1 * Math.abs(-1)). //+ toExponential, toPrecision, toString, toFixed

Math. //+ abs, min, max, ...
Math.p //+ pow, propertyIsEnumerable

// regular expression tests

var reg = new RegExp(/test/i, "test Test");
reg. //+ exec, test, ...

var pattern1 = /is/g;
pattern1. //+ global, ignoreCase, multiline, ...

// String tests

"x". //+ charAt, concat, ...  @5

"x".ch //+ charAt, charCodeAt @7

"x".charA //+ charAt

"1". //+ length,lastIndexOf,...

"1".toString(). // charAt, concat, ...

var car = "Volvo";
car[1]. //+ charAt, indexOf, lastIndexOf,...

var s1 = 10 +"000";
s1. //+ match, slice, replace, search, ...

var s2 = new String("hello, world");
s2. //+ substring, toLowerCase, trim, substr, toUpperCase, ...

var s3 = "test";
s3. //+ split, trim, ...

var s4 = ["Strawberry", "Blueberry"][0];
s4. //+ toLocaleLowerCase, toLocaleUpperCase, ...

// object tests

var person = new Object();
person.firstname = "John";
person.lastname = "Doe";
person.age = 50;
person.eyecolor = "blue";
person. //+ age, eyecolor, firstname, lastname
person.age. //+ toExponential, toPrecision, toFixed, toString
person.lastname. //+ charAt, charCodeAt, concat, ...

function personType(firstname, lastname, age, eyecolor) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.eyecolor = eyecolor;
  this.changeName = changeName;
  this. //+ age, changeName, eyecolor, firstname, lastname
  this.changeName     //+ changeName
  this.changeName()   
  function changeName(name) {
    this.lastname = name;
    return this.lastname;
  }
}

var friend = new personType("Sally", "Rally", 48, "green");
friend. //+ age, changeName, eyecolor, firstname, lastname
friend.firs //+ firstname
friend.firstname. //+ charAt, charCodeAt, concat, ...
friend.ch //+ changeName
friend.changeName() //+ parseInt, Function, Math, ...
friend.changeName(). //+ charAt, charCodeAt, concat, ...


var base = {foo: 10, bar: 20, foo2: { a: 10, b: "test" } };
base. //+ bar, baz, foo, foo2
base.f //+ foo, foo2
base.foo //+ foo, foo2
base.foo. //+ toExponential, toPrecision, toFixed, toString
base.foo2 //+ foo2
base.foo2. //+ a, b
base.foo2.a. //+ toExponential, toPrecision, toFixed, toString
base.foo2.b. //+ charAt, charCodeAt, concat, ...

base.baz = 30;
base. //+ bar, baz, foo, foo2

var gen1 = Object.create(base);
var gen2 = Object.create(gen1);
gen1.quux = 50;
gen2.kaka = 10;
gen1.  //+ bar, baz, foo, foo2, quux
gen1.foo. //+ toExponential, toPrecision, toFixed, toString
gen1.kaka. //+ 
gen1.quux. //+ toExponential, toPrecision, toFixed, toString
gen2. //+ bar, baz, foo, foo2, quux, kaka
gen2.kaka. //+ toExponential, toPrecision, toFixed, toString
gen2.quux. //+ toExponential, toPrecision, toFixed, toString

var extend = Object.create(base, { prop1: { value: "hi" }, prop2: { value: 10 } });
extend. //+ bar, baz, foo, foo2, prop1, prop2
extend.prop1. //+ charAt, charCodeAt, concat, ... @14
extend.prop2. //+ toExponential, toPrecision, toFixed, toString
extend.bar. //+ toExponential, toPrecision, toFixed, toString

var empty = Object.create(null);
empty.prop1 = "hi";
empty.hasOwnProperty. //+ 
empty.prop1. //+ charAt, charCodeAt, concat, ...

function Ctor1() { this.x = 10; }
Ctor1.prototype = {a: 1};
Ctor1. //+ apply, bind, call, prototype

function Ctor2() {}

new Ctor1(). //+ a, x
new Ctor2(). //+ 

var singleton = {a: 10, b: 20}.  //+ a, b

function Foo(x) {
  this.x = x;
  this.y = [1];
}

Foo.prototype = {
  makeString: function() { return "hi"; },
  bar: 13
};

var foo = new Foo(true); 

foo. //+ bar, makeString, x, y, ...
foo.makeString(). //+ charAt, charCodeAt, concat, ...
foo.bar. //+ toExponential, toPrecision, toFixed, toString

config = {
  CSS: {
    IDs: {
      container: 'eytp-maincontainer',
      canvas: 'eytp-playercanvas',
      player: 'eytp-player',
      controls: 'eytp-controls' 
     }
   }
}
config. //+ CSS
config.CSS. //+ IDs
config.CSS.IDs. //+ container, canvas, player, controls

// array tests

var a = [1, 2, 3]; 
a. //+ pop, push, reverse, shift, sort, ...

var years = [1950, 1960, 1970, 1980, 1990, 2000, 2010];
years.slice(2). //+ splice, unshift, concat, ...

["x"].concat(["hi"]). //+  pop, push, reverse, ...

var arr1 = [true, false, true].filter(function(x){return x;});
arr1. //+  pop, push, reverse, ...

[].map(function() { return "x"; }). //+ pop, push, reverse, ...

"foo bar baz".split(" "). //+ pop, shift, sort, ...

var arr2 = new Array(1, 3, 5, 7);
arr2. //+ pop, shift, sort, ...

function scope1() {arr2. } //+ pop, shift, sort, ...  @25

var f = function (arr1, arr2) {}(arr2. ); //+ pop, shift, sort, ... @39

var f2 = function (arr3) {arr3. }("foo bar baz".split(" ")); //+ pop, ... @32

var f3 = function (arr4) {arr4. }("test string"); //+ charAt, ... @32

(function() {
  var innerArr1 = arr2;
  var refArr = innerArr1; 
  innerArr1. //+ pop, shift, sort, ...

  var ref = innerArr2;
  ref. //+ pop, shift, sort, ...

  var innerArr2 = [1, 2, 3]; 
  var self = this;
  function nestedFun(){
    innerArr3. //+ pop, shift, sort, ...
    innerArr2. //+ pop, shift, sort, ...
    refArr. //+ pop, shift, ...

    return [5, 7, 9];
  }
  var innerArr3 = [];
  var result = nestedFun();
  result. //+ pop, shift, sort, ...
  nestedFun(). //+ pop, shift, sort, ...
});

//arguments is an array
function(){
  arguments. //+ pop, shift, sort, ...
}

// scope tests

function one(){
  person. //+ charAt, charCodeAt, concat, ...
  var person = "test";
  person. //+ charAt, charCodeAt, concat, ...
  var localVar1InOne = "test"; 
  globalVar1 = 10; 
  function innerFunc1() {
    globalVar1. //+ toExponential, toPrecision, toFixed, toString
    localVar1InOne. //+ charAt, charCodeAt, concat, ...
    var localVar1InInnerFunc = "hello";
  }
  localVar1InInnerFunc  //+ 
}
person. //+ firstname, lastname, age, eyecolor

globalVar1. //+ toExponential, toPrecision, toFixed, toString
localVar1InOne. //+ 

function timeout(f, timeout) {}
var obj = {
  name: 'foo',
  func: function() {
    var that = this;
    timeout(function() {
      console.log(that.name.); //+ charAt, charCodeAt, concat, ... @29
    }, 3000);
  }
};

(function () {
  var dog = "German Shepherd";
  localVarBecomeGlobal = [1, 2, 3];
})();

localVarBecomeGlobal. //+ pop, shift, sort,...

// if control flow
function testIfControlFlow1() {
  inNestedIf. //+ charAt, charCodeAt, concat, ...
  if (true) {
    var varInIf = "in if";
    varInIf. //+ charAt, charCodeAt, concat, ...
    var f = (function() {
          var name = "inner func"; 
          varInIf. //+ charAt, charCodeAt, concat, ...
          return { name: name }; })();
      
    f.name. //+ charAt, charCodeAt, concat, ...
    if (true) {
      var inNestedIf = "in nested if";
    } else {
      var t = varInIf. //+ charAt, charCodeAt, concat, ...
      f.name. //+ charAt, charCodeAt, concat, ...
      inNestedIf. //+ charAt, charCodeAt, concat, ...
    }
  }
  t. //+ 
  f. //+ name
}
inNestedIf.        //+ 
varInIf.           //+ 

// for control flow
function testForControlFlow1() {
  varInForLoop. //+ charAt, charCodeAt, concat, ...
  varInNestedForLoop. //+ toExponential, toPrecision, toString, toFixed

  var m = "test";
  for (var n = 0; n < 10; n++) {
    var varInForLoop = "test";
    for (var j = 0; j < 5; j++ ) {
      var varInNestedForLoop = 10;
    }
    varInNestedForLoop. //+ toExponential, toPrecision, toString, toFixed
  }
}
varInForLoop. //+ 
varInNestedForLoop. //+  

// for/in loop
function testForInLoopFlow1() {
  for (x in person) {     
    person[x]. //+ 
  }
}

// while loop
function testWhileLoopFlow1() {
  var n = 5; 
  while (n-- > 0) {
    var varInWhileLoop = "test";
  }
}
varInWhileLoop. //+ 

function testDoWhileLoopFlow1() {
  n = 5; 
  do {
    var varInDoWhileLoop = "test";
  } while(n-- > 0);
}
varInDoWhileLoop. //+ 


// break
function testBreakFlow1() {
  for (i = 0;i < 10; i++) {
    if (i == 3) {
      var testBreak = "test";
      break;
    } else {
      var testContinue = "test"
      continue;
    }
    testBreak. //+ charAt, charCodeAt, concat, ...
    testContinue. //+ charAt, charCodeAt, concat, ...
  }
}
testBreak. //+ 
testContinue. //+ 

// switch/case

function testSwitchFlow1(n) {

  switch(n) {
    case 1:
      var inCase1 = "case1";
      break;
    case 2:
      inCase1. //+ charAt, charCodeAt, concat, ...
      var inCase2 = " case2";
      break;
    default:
  }

  inCase1. //+ charAt, charCodeAt, concat, ...
  inCase2. //+ charAt, charCodeAt, concat, ...
}

inCase1. //+ 

// try/catch/finally

function testTryCatchFlow1() {
  try {
    var varInTry = " test";
  } catch(err) {
    varInTry. //+ charAt, charCodeAt, concat, ...
    var varInCatch = "test";
  } finally {
    varInTry. //+ charAt, charCodeAt, concat, ...
    varInCatch. //+ charAt, charCodeAt, concat, ...
  }
}

varInTry. //+ 
varInCatch. //+ 
```
```json
[
  {
    "id": "0186c240-7aef-11e6-9f25-f573cdcafdb3",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "number",
    "lineno": 3,
    "origin": {
      "!span": "21[2:4]-22[2:5]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0189cf8d-7aef-11e6-9f25-f573cdcafdb3",
    "name": "y",
    "addr": "/a/",
    "kind": "v",
    "type": "[number]",
    "lineno": 8,
    "origin": {
      "!span": "129[7:4]-130[7:5]",
      "!type": "[number]",
      "!data": {
        "isConstructor": false,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0186e950-7aef-11e6-9f25-f573cdcafdb3",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "[number]",
    "lineno": 8,
    "origin": {
      "!span": "129[7:4]-130[7:5]",
      "!type": "[number]",
      "!data": {
        "isConstructor": false,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01873781-7aef-11e6-9f25-f573cdcafdb3",
    "name": "prop2",
    "kind": "v",
    "type": "number",
    "namespace": "extend",
    "parent": "0187377f-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01873780-7aef-11e6-9f25-f573cdcafdb3",
    "name": "prop1",
    "kind": "v",
    "type": "string",
    "namespace": "extend",
    "parent": "0187377f-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0189cf8c-7aef-11e6-9f25-f573cdcafdb3",
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "type": "[number]",
    "lineno": 11,
    "parent": "0189cf83-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "206[10:4]-207[10:5]",
      "!type": "[number]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0186e951-7aef-11e6-9f25-f573cdcafdb3",
    "name": "z",
    "addr": "/z/",
    "kind": "v",
    "type": "number",
    "lineno": 14,
    "origin": {
      "!span": "283[13:4]-284[13:5]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0186e952-7aef-11e6-9f25-f573cdcafdb3",
    "name": "n",
    "addr": "/n/",
    "kind": "v",
    "type": "number",
    "lineno": 17,
    "origin": {
      "!span": "398[16:4]-399[16:5]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0186e953-7aef-11e6-9f25-f573cdcafdb3",
    "name": "m",
    "addr": "/m/",
    "kind": "v",
    "type": "number",
    "lineno": 20,
    "origin": {
      "!span": "486[19:4]-487[19:5]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0186e954-7aef-11e6-9f25-f573cdcafdb3",
    "name": "k",
    "addr": "/k/",
    "kind": "v",
    "type": "number",
    "lineno": 23,
    "origin": {
      "!span": "558[22:4]-559[22:5]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0186e955-7aef-11e6-9f25-f573cdcafdb3",
    "name": "l",
    "addr": "/l/",
    "kind": "v",
    "type": "number",
    "lineno": 26,
    "origin": {
      "!span": "623[25:4]-624[25:5]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0186e956-7aef-11e6-9f25-f573cdcafdb3",
    "name": "a2",
    "addr": "/a2/",
    "kind": "v",
    "type": "number",
    "lineno": 29,
    "origin": {
      "!span": "734[28:4]-736[28:6]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0186e957-7aef-11e6-9f25-f573cdcafdb3",
    "name": "a3",
    "addr": "/a3/",
    "kind": "v",
    "type": "number",
    "lineno": 32,
    "origin": {
      "!span": "813[31:4]-815[31:6]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0186e958-7aef-11e6-9f25-f573cdcafdb3",
    "name": "a4",
    "addr": "/a4/",
    "kind": "v",
    "type": "number",
    "lineno": 35,
    "origin": {
      "!span": "896[34:4]-898[34:6]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0186e959-7aef-11e6-9f25-f573cdcafdb3",
    "name": "a5",
    "addr": "/a5/",
    "kind": "v",
    "type": "number",
    "lineno": 38,
    "origin": {
      "!span": "974[37:4]-976[37:6]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0186e95a-7aef-11e6-9f25-f573cdcafdb3",
    "name": "b1",
    "addr": "/b1/",
    "kind": "v",
    "type": "number",
    "lineno": 41,
    "origin": {
      "!span": "1057[40:4]-1059[40:6]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0186e95b-7aef-11e6-9f25-f573cdcafdb3",
    "name": "reg",
    "addr": "/reg/",
    "kind": "v",
    "type": "regexp",
    "lineno": 51,
    "origin": {
      "!span": "1324[50:4]-1327[50:7]",
      "!type": "+RegExp",
      "!data": {
        "isConstructor": false,
        "type": "RegExp.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0189cf87-7aef-11e6-9f25-f573cdcafdb3",
    "name": "pattern1",
    "addr": "/pattern1/",
    "kind": "v",
    "type": "regexp",
    "lineno": 54,
    "parent": "0189cf83-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "1394[53:4]-1402[53:12]",
      "!type": "+RegExp",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "RegExp.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0186e95c-7aef-11e6-9f25-f573cdcafdb3",
    "name": "car",
    "addr": "/car/",
    "kind": "v",
    "type": "string",
    "lineno": 69,
    "origin": {
      "!span": "1646[68:4]-1649[68:7]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0186e95d-7aef-11e6-9f25-f573cdcafdb3",
    "name": "s1",
    "addr": "/s1/",
    "kind": "v",
    "type": "string",
    "lineno": 72,
    "origin": {
      "!span": "1711[71:4]-1713[71:6]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0186e95e-7aef-11e6-9f25-f573cdcafdb3",
    "name": "s2",
    "addr": "/s2/",
    "kind": "v",
    "type": "string",
    "lineno": 75,
    "origin": {
      "!span": "1775[74:4]-1777[74:6]",
      "!type": "+String",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0186e95f-7aef-11e6-9f25-f573cdcafdb3",
    "name": "s3",
    "addr": "/s3/",
    "kind": "v",
    "type": "string",
    "lineno": 78,
    "origin": {
      "!span": "1876[77:4]-1878[77:6]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0186e960-7aef-11e6-9f25-f573cdcafdb3",
    "name": "s4",
    "addr": "/s4/",
    "kind": "v",
    "type": "string",
    "lineno": 81,
    "origin": {
      "!span": "1919[80:4]-1921[80:6]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0186e961-7aef-11e6-9f25-f573cdcafdb3",
    "name": "person",
    "addr": "/person/",
    "kind": "v",
    "lineno": 86,
    "origin": {
      "!span": "2028[85:4]-2034[85:10]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0186e962-7aef-11e6-9f25-f573cdcafdb3",
    "name": "firstname",
    "addr": "/firstname/",
    "kind": "v",
    "type": "string",
    "lineno": 87,
    "namespace": "person",
    "parent": "0186e961-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "2058[86:7]-2067[86:16]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01871060-7aef-11e6-9f25-f573cdcafdb3",
    "name": "lastname",
    "addr": "/lastname/",
    "kind": "v",
    "type": "string",
    "lineno": 88,
    "namespace": "person",
    "parent": "0186e961-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "2085[87:7]-2093[87:15]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01871061-7aef-11e6-9f25-f573cdcafdb3",
    "name": "age",
    "addr": "/age/",
    "kind": "v",
    "type": "number",
    "lineno": 89,
    "namespace": "person",
    "parent": "0186e961-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "2110[88:7]-2113[88:10]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01871062-7aef-11e6-9f25-f573cdcafdb3",
    "name": "eyecolor",
    "addr": "/eyecolor/",
    "kind": "v",
    "type": "string",
    "lineno": 90,
    "namespace": "person",
    "parent": "0186e961-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "2127[89:7]-2135[89:15]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01871067-7aef-11e6-9f25-f573cdcafdb3",
    "name": "eyecolor",
    "addr": "/eyecolor/",
    "kind": "v",
    "type": "string",
    "lineno": 95,
    "namespace": "personType",
    "parent": "01871063-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "2355[94:46]-2363[94:54]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype",
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01871066-7aef-11e6-9f25-f573cdcafdb3",
    "name": "age",
    "addr": "/age/",
    "kind": "v",
    "type": "number",
    "lineno": 95,
    "namespace": "personType",
    "parent": "01871063-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "2350[94:41]-2353[94:44]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype",
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01871064-7aef-11e6-9f25-f573cdcafdb3",
    "name": "firstname",
    "addr": "/firstname/",
    "kind": "v",
    "type": "string",
    "lineno": 95,
    "namespace": "personType",
    "parent": "01871063-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "2329[94:20]-2338[94:29]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype",
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01871063-7aef-11e6-9f25-f573cdcafdb3",
    "name": "personType",
    "addr": "/personType/",
    "kind": "f",
    "type": "void function(string, string, number, string)",
    "lineno": 95,
    "origin": {
      "!span": "2318[94:9]-2328[94:19]",
      "!type": "fn(firstname: string, lastname: string, age: number, eyecolor: string)",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01871065-7aef-11e6-9f25-f573cdcafdb3",
    "name": "lastname",
    "addr": "/lastname/",
    "kind": "v",
    "type": "string",
    "lineno": 95,
    "namespace": "personType",
    "parent": "01871063-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "2340[94:31]-2348[94:39]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype",
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01873770-7aef-11e6-9f25-f573cdcafdb3",
    "name": "firstname",
    "addr": "/firstname/",
    "kind": "v",
    "type": "string",
    "lineno": 96,
    "namespace": "friend",
    "parent": "0187106a-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "2374[95:7]-2383[95:16]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01873771-7aef-11e6-9f25-f573cdcafdb3",
    "name": "lastname",
    "addr": "/lastname/",
    "kind": "v",
    "type": "string",
    "lineno": 97,
    "namespace": "friend",
    "parent": "0187106a-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "2404[96:7]-2412[96:15]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01873772-7aef-11e6-9f25-f573cdcafdb3",
    "name": "age",
    "addr": "/age/",
    "kind": "v",
    "type": "number",
    "lineno": 98,
    "namespace": "friend",
    "parent": "0187106a-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "2432[97:7]-2435[97:10]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01873773-7aef-11e6-9f25-f573cdcafdb3",
    "name": "eyecolor",
    "addr": "/eyecolor/",
    "kind": "v",
    "type": "string",
    "lineno": 99,
    "namespace": "friend",
    "parent": "0187106a-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "2450[98:7]-2458[98:15]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01871068-7aef-11e6-9f25-f573cdcafdb3",
    "name": "changeName",
    "addr": "/changeName/",
    "kind": "f",
    "type": "!this.lastname function(?)",
    "lineno": 100,
    "namespace": "personType",
    "parent": "01871063-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "2478[99:7]-2488[99:17]",
      "!type": "fn(name: ?) -> !this.lastname",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01871069-7aef-11e6-9f25-f573cdcafdb3",
    "name": "name",
    "addr": "/name/",
    "kind": "v",
    "lineno": 104,
    "namespace": "personType.changeName",
    "parent": "01871068-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "2644[103:22]-2648[103:26]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": false
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0187106a-7aef-11e6-9f25-f573cdcafdb3",
    "name": "friend",
    "addr": "/friend/",
    "kind": "v",
    "type": "personType",
    "lineno": 110,
    "origin": {
      "!span": "2715[109:4]-2721[109:10]",
      "!type": "+personType",
      "!data": {
        "isConstructor": false,
        "type": "personType.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01873776-7aef-11e6-9f25-f573cdcafdb3",
    "name": "bar",
    "addr": "/bar/",
    "kind": "v",
    "type": "number",
    "lineno": 119,
    "namespace": "base",
    "parent": "01873774-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "3069[118:21]-3072[118:24]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01873777-7aef-11e6-9f25-f573cdcafdb3",
    "name": "foo2",
    "addr": "/foo2/",
    "kind": "v",
    "lineno": 119,
    "namespace": "base",
    "parent": "01873774-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "3078[118:30]-3082[118:34]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01873778-7aef-11e6-9f25-f573cdcafdb3",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 119,
    "namespace": "base.foo2",
    "parent": "01873777-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "3086[118:38]-3087[118:39]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01873775-7aef-11e6-9f25-f573cdcafdb3",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "number",
    "lineno": 119,
    "namespace": "base",
    "parent": "01873774-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "3060[118:12]-3063[118:15]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01873779-7aef-11e6-9f25-f573cdcafdb3",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "string",
    "lineno": 119,
    "namespace": "base.foo2",
    "parent": "01873777-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "3093[118:45]-3094[118:46]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01873774-7aef-11e6-9f25-f573cdcafdb3",
    "name": "base",
    "addr": "/base/",
    "kind": "v",
    "lineno": 119,
    "origin": {
      "!span": "3052[118:4]-3056[118:8]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0187377a-7aef-11e6-9f25-f573cdcafdb3",
    "name": "baz",
    "addr": "/baz/",
    "kind": "v",
    "type": "number",
    "lineno": 129,
    "namespace": "base",
    "parent": "01873774-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "3399[128:5]-3402[128:8]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0187377b-7aef-11e6-9f25-f573cdcafdb3",
    "name": "gen1",
    "addr": "/gen1/",
    "kind": "v",
    "lineno": 132,
    "origin": {
      "!span": "3444[131:4]-3448[131:8]",
      "!data": {
        "isConstructor": false,
        "type": "base"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0187377d-7aef-11e6-9f25-f573cdcafdb3",
    "name": "gen2",
    "addr": "/gen2/",
    "kind": "v",
    "lineno": 133,
    "origin": {
      "!span": "3476[132:4]-3480[132:8]",
      "!data": {
        "isConstructor": false
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0187377c-7aef-11e6-9f25-f573cdcafdb3",
    "name": "quux",
    "addr": "/quux/",
    "kind": "v",
    "type": "number",
    "lineno": 134,
    "namespace": "gen1",
    "parent": "0187377b-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "3509[133:5]-3513[133:9]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0187377e-7aef-11e6-9f25-f573cdcafdb3",
    "name": "kaka",
    "addr": "/kaka/",
    "kind": "v",
    "type": "number",
    "lineno": 135,
    "namespace": "gen2",
    "parent": "0187377d-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "3525[134:5]-3529[134:9]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0187377f-7aef-11e6-9f25-f573cdcafdb3",
    "name": "extend",
    "addr": "/extend/",
    "kind": "v",
    "lineno": 144,
    "origin": {
      "!span": "3879[143:4]-3885[143:10]",
      "!data": {
        "isConstructor": false,
        "type": "base"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01873782-7aef-11e6-9f25-f573cdcafdb3",
    "name": "empty",
    "addr": "/empty/",
    "kind": "v",
    "lineno": 150,
    "origin": {
      "!span": "4190[149:4]-4195[149:9]",
      "!data": {
        "isConstructor": false
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01873783-7aef-11e6-9f25-f573cdcafdb3",
    "name": "prop1",
    "addr": "/prop1/",
    "kind": "v",
    "type": "string",
    "lineno": 151,
    "namespace": "empty",
    "parent": "01873782-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "4225[150:6]-4230[150:11]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01873784-7aef-11e6-9f25-f573cdcafdb3",
    "name": "Ctor1",
    "addr": "/Ctor1/",
    "kind": "f",
    "type": "void function()",
    "lineno": 155,
    "origin": {
      "!span": "4325[154:9]-4330[154:14]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01875e81-7aef-11e6-9f25-f573cdcafdb3",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 156,
    "namespace": "Ctor1.prototype",
    "parent": "01875e80-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "4369[155:19]-4370[155:20]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01875e80-7aef-11e6-9f25-f573cdcafdb3",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 156,
    "namespace": "Ctor1",
    "parent": "01873784-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "4356[155:6]-4365[155:15]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01875e82-7aef-11e6-9f25-f573cdcafdb3",
    "name": "Ctor2",
    "addr": "/Ctor2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 159,
    "origin": {
      "!span": "4426[158:9]-4431[158:14]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0189cf88-7aef-11e6-9f25-f573cdcafdb3",
    "name": "singleton",
    "addr": "/singleton/",
    "kind": "v",
    "lineno": 164,
    "parent": "0189cf83-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "4483[163:4]-4492[163:13]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": false
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01875e83-7aef-11e6-9f25-f573cdcafdb3",
    "name": "Foo",
    "addr": "/Foo/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 166,
    "origin": {
      "!span": "4531[165:9]-4534[165:12]",
      "!type": "fn(x: bool)",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01875e87-7aef-11e6-9f25-f573cdcafdb3",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "boolean",
    "lineno": 166,
    "namespace": "Foo",
    "parent": "01875e83-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "4535[165:13]-4536[165:14]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "type": "Boolean.prototype",
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01875e8a-7aef-11e6-9f25-f573cdcafdb3",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "boolean",
    "lineno": 167,
    "namespace": "foo",
    "parent": "01875e89-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "4547[166:7]-4548[166:8]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01875e88-7aef-11e6-9f25-f573cdcafdb3",
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "type": "[number]",
    "lineno": 168,
    "namespace": "Foo",
    "parent": "01875e83-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "4561[167:7]-4562[167:8]",
      "!type": "[number]",
      "!data": {
        "isConstructor": false,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01875e84-7aef-11e6-9f25-f573cdcafdb3",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 171,
    "namespace": "Foo",
    "parent": "01875e83-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "4577[170:4]-4586[170:13]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01875e85-7aef-11e6-9f25-f573cdcafdb3",
    "name": "makeString",
    "addr": "/makeString/",
    "kind": "f",
    "type": "string function()",
    "lineno": 172,
    "namespace": "Foo.prototype",
    "parent": "01875e84-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "4593[171:2]-4603[171:12]",
      "!type": "fn() -> string",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01875e86-7aef-11e6-9f25-f573cdcafdb3",
    "name": "bar",
    "addr": "/bar/",
    "kind": "v",
    "type": "number",
    "lineno": 173,
    "namespace": "Foo.prototype",
    "parent": "01875e84-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "4636[172:2]-4639[172:5]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01875e89-7aef-11e6-9f25-f573cdcafdb3",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "Foo",
    "lineno": 176,
    "origin": {
      "!span": "4652[175:4]-4655[175:7]",
      "!type": "+Foo",
      "!data": {
        "isConstructor": false,
        "type": "Foo.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01895a52-7aef-11e6-9f25-f573cdcafdb3",
    "name": "config",
    "addr": "/config/",
    "kind": "v",
    "lineno": 182,
    "origin": {
      "!span": "4825[181:0]-4831[181:6]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01895a53-7aef-11e6-9f25-f573cdcafdb3",
    "name": "CSS",
    "addr": "/CSS/",
    "kind": "v",
    "lineno": 183,
    "namespace": "config",
    "parent": "01895a52-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "4838[182:2]-4841[182:5]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01895a54-7aef-11e6-9f25-f573cdcafdb3",
    "name": "IDs",
    "addr": "/IDs/",
    "kind": "v",
    "lineno": 184,
    "namespace": "config.CSS",
    "parent": "01895a53-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "4849[183:4]-4852[183:7]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01895a55-7aef-11e6-9f25-f573cdcafdb3",
    "name": "container",
    "addr": "/container/",
    "kind": "v",
    "type": "string",
    "lineno": 185,
    "namespace": "config.CSS.IDs",
    "parent": "01895a54-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "4862[184:6]-4871[184:15]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01895a56-7aef-11e6-9f25-f573cdcafdb3",
    "name": "canvas",
    "addr": "/canvas/",
    "kind": "v",
    "type": "string",
    "lineno": 186,
    "namespace": "config.CSS.IDs",
    "parent": "01895a54-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "4901[185:6]-4907[185:12]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0189a870-7aef-11e6-9f25-f573cdcafdb3",
    "name": "player",
    "addr": "/player/",
    "kind": "v",
    "type": "string",
    "lineno": 187,
    "namespace": "config.CSS.IDs",
    "parent": "01895a54-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "4936[186:6]-4942[186:12]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0189a871-7aef-11e6-9f25-f573cdcafdb3",
    "name": "controls",
    "addr": "/controls/",
    "kind": "v",
    "type": "string",
    "lineno": 188,
    "namespace": "config.CSS.IDs",
    "parent": "01895a54-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "4965[187:6]-4973[187:14]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01875e8b-7aef-11e6-9f25-f573cdcafdb3",
    "name": "years",
    "addr": "/years/",
    "kind": "v",
    "type": "[number]",
    "lineno": 201,
    "origin": {
      "!span": "5184[200:4]-5189[200:9]",
      "!type": "[number]",
      "!data": {
        "isConstructor": false,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01875e8c-7aef-11e6-9f25-f573cdcafdb3",
    "name": "arr1",
    "addr": "/arr1/",
    "kind": "v",
    "type": "[bool]",
    "lineno": 206,
    "origin": {
      "!span": "5342[205:4]-5346[205:8]",
      "!type": "[bool]",
      "!data": {
        "isConstructor": false,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01878590-7aef-11e6-9f25-f573cdcafdb3",
    "name": "arr2",
    "addr": "/arr2/",
    "kind": "v",
    "type": "[number]",
    "lineno": 213,
    "origin": {
      "!span": "5559[212:4]-5563[212:8]",
      "!type": "[number]",
      "!data": {
        "isConstructor": false,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01878591-7aef-11e6-9f25-f573cdcafdb3",
    "name": "scope1",
    "addr": "/scope1/",
    "kind": "f",
    "type": "void function()",
    "lineno": 216,
    "origin": {
      "!span": "5631[215:9]-5637[215:15]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0189cf84-7aef-11e6-9f25-f573cdcafdb3",
    "name": "f",
    "addr": "/f/",
    "kind": "v",
    "lineno": 218,
    "parent": "0189cf83-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "5685[217:4]-5686[217:5]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": false
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0189cf85-7aef-11e6-9f25-f573cdcafdb3",
    "name": "f2",
    "addr": "/f2/",
    "kind": "v",
    "lineno": 220,
    "parent": "0189cf83-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "5758[219:4]-5760[219:6]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": false
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0189cf86-7aef-11e6-9f25-f573cdcafdb3",
    "name": "f3",
    "addr": "/f3/",
    "kind": "v",
    "lineno": 222,
    "parent": "0189cf83-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "5837[221:4]-5839[221:6]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": false
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0187aca0-7aef-11e6-9f25-f573cdcafdb3",
    "name": "one",
    "addr": "/one/",
    "kind": "f",
    "type": "void function()",
    "lineno": 254,
    "origin": {
      "!span": "6515[253:9]-6518[253:12]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0187fac0-7aef-11e6-9f25-f573cdcafdb3",
    "name": "person",
    "addr": "/person/",
    "kind": "v",
    "type": "string",
    "lineno": 256,
    "namespace": "one",
    "parent": "0187aca0-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "6574[255:6]-6580[255:12]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0187d3b0-7aef-11e6-9f25-f573cdcafdb3",
    "name": "localVar1InOne",
    "addr": "/localVar1InOne/",
    "kind": "v",
    "type": "string",
    "lineno": 258,
    "namespace": "one",
    "parent": "0187aca0-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "6643[257:6]-6657[257:20]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0189cf80-7aef-11e6-9f25-f573cdcafdb3",
    "name": "globalVar1",
    "addr": "/globalVar1/",
    "kind": "v",
    "type": "number",
    "lineno": 259,
    "origin": {
      "!span": "6671[258:2]-6681[258:12]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0189cf8a-7aef-11e6-9f25-f573cdcafdb3",
    "name": "f",
    "addr": "/f/",
    "kind": "v",
    "lineno": 272,
    "namespace": "timeout",
    "parent": "0189cf89-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "7061[271:17]-7062[271:18]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": false
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0189cf8b-7aef-11e6-9f25-f573cdcafdb3",
    "name": "timeout",
    "addr": "/timeout/",
    "kind": "f",
    "type": "void function(?, ?)",
    "lineno": 272,
    "namespace": "timeout",
    "parent": "0189cf89-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "7064[271:20]-7071[271:27]",
      "!type": "fn(f: ?, timeout: ?)",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0189cf89-7aef-11e6-9f25-f573cdcafdb3",
    "name": "timeout",
    "addr": "/timeout/",
    "kind": "v",
    "lineno": 272,
    "parent": "0189cf83-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "7053[271:9]-7060[271:16]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": false
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0187fac1-7aef-11e6-9f25-f573cdcafdb3",
    "name": "obj",
    "addr": "/obj/",
    "kind": "v",
    "lineno": 273,
    "origin": {
      "!span": "7080[272:4]-7083[272:7]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0187fac2-7aef-11e6-9f25-f573cdcafdb3",
    "name": "name",
    "addr": "/name/",
    "kind": "v",
    "type": "string",
    "lineno": 274,
    "namespace": "obj",
    "parent": "0187fac1-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "7090[273:2]-7094[273:6]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0187fac3-7aef-11e6-9f25-f573cdcafdb3",
    "name": "func",
    "addr": "/func/",
    "kind": "f",
    "type": "void function()",
    "lineno": 275,
    "namespace": "obj",
    "parent": "0187fac1-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "7105[274:2]-7109[274:6]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0189cf81-7aef-11e6-9f25-f573cdcafdb3",
    "name": "localVarBecomeGlobal",
    "addr": "/localVarBecomeGlobal/",
    "kind": "v",
    "type": "[number]",
    "lineno": 285,
    "origin": {
      "!span": "7311[284:2]-7331[284:22]",
      "!type": "[number]",
      "!data": {
        "isConstructor": false,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "018848e0-7aef-11e6-9f25-f573cdcafdb3",
    "name": "testIfControlFlow1",
    "addr": "/testIfControlFlow1/",
    "kind": "f",
    "type": "void function()",
    "lineno": 291,
    "origin": {
      "!span": "7428[290:9]-7446[290:27]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "018848e5-7aef-11e6-9f25-f573cdcafdb3",
    "name": "varInIf",
    "addr": "/varInIf/",
    "kind": "v",
    "type": "string",
    "lineno": 294,
    "namespace": "testIfControlFlow1",
    "parent": "018848e0-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "7523[293:8]-7530[293:15]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "018848e1-7aef-11e6-9f25-f573cdcafdb3",
    "name": "f",
    "addr": "/f/",
    "kind": "v",
    "lineno": 296,
    "namespace": "testIfControlFlow1",
    "parent": "018848e0-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "7599[295:8]-7600[295:9]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "018848e2-7aef-11e6-9f25-f573cdcafdb3",
    "name": "name",
    "addr": "/name/",
    "kind": "v",
    "type": "string",
    "lineno": 299,
    "namespace": "testIfControlFlow1.f",
    "parent": "018848e1-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "7727[298:19]-7731[298:23]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "018848e3-7aef-11e6-9f25-f573cdcafdb3",
    "name": "inNestedIf",
    "addr": "/inNestedIf/",
    "kind": "v",
    "type": "string",
    "lineno": 303,
    "namespace": "testIfControlFlow1",
    "parent": "018848e0-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "7828[302:10]-7838[302:20]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "018848e4-7aef-11e6-9f25-f573cdcafdb3",
    "name": "t",
    "addr": "/t/",
    "kind": "v",
    "lineno": 305,
    "namespace": "testIfControlFlow1",
    "parent": "018848e0-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "7880[304:10]-7881[304:11]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": false
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0188be10-7aef-11e6-9f25-f573cdcafdb3",
    "name": "testForControlFlow1",
    "addr": "/testForControlFlow1/",
    "kind": "f",
    "type": "void function()",
    "lineno": 317,
    "origin": {
      "!span": "8147[316:9]-8166[316:28]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0188e520-7aef-11e6-9f25-f573cdcafdb3",
    "name": "m",
    "addr": "/m/",
    "kind": "v",
    "type": "string",
    "lineno": 321,
    "namespace": "testForControlFlow1",
    "parent": "0188be10-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "8302[320:6]-8303[320:7]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0188e521-7aef-11e6-9f25-f573cdcafdb3",
    "name": "n",
    "addr": "/n/",
    "kind": "v",
    "type": "number",
    "lineno": 322,
    "namespace": "testForControlFlow1",
    "parent": "0188be10-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "8325[321:11]-8326[321:12]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0188e522-7aef-11e6-9f25-f573cdcafdb3",
    "name": "varInForLoop",
    "addr": "/varInForLoop/",
    "kind": "v",
    "type": "string",
    "lineno": 323,
    "namespace": "testForControlFlow1",
    "parent": "0188be10-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "8355[322:8]-8367[322:20]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0188be11-7aef-11e6-9f25-f573cdcafdb3",
    "name": "j",
    "addr": "/j/",
    "kind": "v",
    "type": "number",
    "lineno": 324,
    "namespace": "testForControlFlow1",
    "parent": "0188be10-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "8391[323:13]-8392[323:14]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0188e523-7aef-11e6-9f25-f573cdcafdb3",
    "name": "varInNestedForLoop",
    "addr": "/varInNestedForLoop/",
    "kind": "v",
    "type": "number",
    "lineno": 325,
    "namespace": "testForControlFlow1",
    "parent": "0188be10-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "8423[324:10]-8441[324:28]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0188e524-7aef-11e6-9f25-f573cdcafdb3",
    "name": "testForInLoopFlow1",
    "addr": "/testForInLoopFlow1/",
    "kind": "f",
    "type": "void function()",
    "lineno": 334,
    "origin": {
      "!span": "8604[333:9]-8622[333:27]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0188e525-7aef-11e6-9f25-f573cdcafdb3",
    "name": "testWhileLoopFlow1",
    "addr": "/testWhileLoopFlow1/",
    "kind": "f",
    "type": "void function()",
    "lineno": 341,
    "origin": {
      "!span": "8704[340:9]-8722[340:27]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0188e526-7aef-11e6-9f25-f573cdcafdb3",
    "name": "n",
    "addr": "/n/",
    "kind": "v",
    "type": "number",
    "lineno": 342,
    "namespace": "testWhileLoopFlow1",
    "parent": "0188e525-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "8733[341:6]-8734[341:7]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0188e527-7aef-11e6-9f25-f573cdcafdb3",
    "name": "varInWhileLoop",
    "addr": "/varInWhileLoop/",
    "kind": "v",
    "type": "string",
    "lineno": 344,
    "namespace": "testWhileLoopFlow1",
    "parent": "0188e525-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "8769[343:8]-8783[343:22]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0188e528-7aef-11e6-9f25-f573cdcafdb3",
    "name": "testDoWhileLoopFlow1",
    "addr": "/testDoWhileLoopFlow1/",
    "kind": "f",
    "type": "void function()",
    "lineno": 349,
    "origin": {
      "!span": "8831[348:9]-8851[348:29]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0188e529-7aef-11e6-9f25-f573cdcafdb3",
    "name": "varInDoWhileLoop",
    "addr": "/varInDoWhileLoop/",
    "kind": "v",
    "type": "string",
    "lineno": 352,
    "namespace": "testDoWhileLoopFlow1",
    "parent": "0188e528-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "8881[351:8]-8897[351:24]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0188e52a-7aef-11e6-9f25-f573cdcafdb3",
    "name": "testBreakFlow1",
    "addr": "/testBreakFlow1/",
    "kind": "f",
    "type": "void function()",
    "lineno": 359,
    "origin": {
      "!span": "8973[358:9]-8987[358:23]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "0189cf82-7aef-11e6-9f25-f573cdcafdb3",
    "name": "i",
    "addr": "/i/",
    "kind": "v",
    "type": "number",
    "lineno": 360,
    "origin": {
      "!span": "8999[359:7]-9000[359:8]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01890c30-7aef-11e6-9f25-f573cdcafdb3",
    "name": "testBreak",
    "addr": "/testBreak/",
    "kind": "v",
    "type": "string",
    "lineno": 362,
    "namespace": "testBreakFlow1",
    "parent": "0188e52a-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "9048[361:10]-9057[361:19]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01893340-7aef-11e6-9f25-f573cdcafdb3",
    "name": "testContinue",
    "addr": "/testContinue/",
    "kind": "v",
    "type": "string",
    "lineno": 365,
    "namespace": "testBreakFlow1",
    "parent": "0188e52a-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "9104[364:10]-9116[364:22]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01893344-7aef-11e6-9f25-f573cdcafdb3",
    "name": "n",
    "addr": "/n/",
    "kind": "v",
    "lineno": 377,
    "namespace": "testSwitchFlow1",
    "parent": "01893341-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "9336[376:25]-9337[376:26]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": false
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01893341-7aef-11e6-9f25-f573cdcafdb3",
    "name": "testSwitchFlow1",
    "addr": "/testSwitchFlow1/",
    "kind": "f",
    "type": "void function(?)",
    "lineno": 377,
    "origin": {
      "!span": "9320[376:9]-9335[376:24]",
      "!type": "fn(n: ?)",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01893342-7aef-11e6-9f25-f573cdcafdb3",
    "name": "inCase1",
    "addr": "/inCase1/",
    "kind": "v",
    "type": "string",
    "lineno": 381,
    "namespace": "testSwitchFlow1",
    "parent": "01893341-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "9378[380:10]-9385[380:17]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01893343-7aef-11e6-9f25-f573cdcafdb3",
    "name": "inCase2",
    "addr": "/inCase2/",
    "kind": "v",
    "type": "string",
    "lineno": 385,
    "namespace": "testSwitchFlow1",
    "parent": "01893341-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "9483[384:10]-9490[384:17]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01893345-7aef-11e6-9f25-f573cdcafdb3",
    "name": "testTryCatchFlow1",
    "addr": "/testTryCatchFlow1/",
    "kind": "f",
    "type": "void function()",
    "lineno": 398,
    "origin": {
      "!span": "9677[397:9]-9694[397:26]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01895a51-7aef-11e6-9f25-f573cdcafdb3",
    "name": "varInTry",
    "addr": "/varInTry/",
    "kind": "v",
    "type": "string",
    "lineno": 400,
    "namespace": "testTryCatchFlow1",
    "parent": "01893345-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "9715[399:8]-9723[399:16]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  },
  {
    "id": "01895a50-7aef-11e6-9f25-f573cdcafdb3",
    "name": "varInCatch",
    "addr": "/varInCatch/",
    "kind": "v",
    "type": "string",
    "lineno": 403,
    "namespace": "testTryCatchFlow1",
    "parent": "01893345-7aef-11e6-9f25-f573cdcafdb3",
    "origin": {
      "!span": "9810[402:8]-9820[402:18]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint_ecma5.js"
  }
]
```
```ctags
x	__DIR__/hint_ecma5.js	/x/;"	v	lineno:3	type:number
y	__DIR__/hint_ecma5.js	/a/;"	v	lineno:8	type:[number]
a	__DIR__/hint_ecma5.js	/a/;"	v	lineno:8	type:[number]
prop2	__DIR__/hint_ecma5.js	//;"	v	namespace:extend	type:number
prop1	__DIR__/hint_ecma5.js	//;"	v	namespace:extend	type:string
y	__DIR__/hint_ecma5.js	/y/;"	v	lineno:11	type:[number]
z	__DIR__/hint_ecma5.js	/z/;"	v	lineno:14	type:number
n	__DIR__/hint_ecma5.js	/n/;"	v	lineno:17	type:number
m	__DIR__/hint_ecma5.js	/m/;"	v	lineno:20	type:number
k	__DIR__/hint_ecma5.js	/k/;"	v	lineno:23	type:number
l	__DIR__/hint_ecma5.js	/l/;"	v	lineno:26	type:number
a2	__DIR__/hint_ecma5.js	/a2/;"	v	lineno:29	type:number
a3	__DIR__/hint_ecma5.js	/a3/;"	v	lineno:32	type:number
a4	__DIR__/hint_ecma5.js	/a4/;"	v	lineno:35	type:number
a5	__DIR__/hint_ecma5.js	/a5/;"	v	lineno:38	type:number
b1	__DIR__/hint_ecma5.js	/b1/;"	v	lineno:41	type:number
reg	__DIR__/hint_ecma5.js	/reg/;"	v	lineno:51	type:regexp
pattern1	__DIR__/hint_ecma5.js	/pattern1/;"	v	lineno:54	type:regexp
car	__DIR__/hint_ecma5.js	/car/;"	v	lineno:69	type:string
s1	__DIR__/hint_ecma5.js	/s1/;"	v	lineno:72	type:string
s2	__DIR__/hint_ecma5.js	/s2/;"	v	lineno:75	type:string
s3	__DIR__/hint_ecma5.js	/s3/;"	v	lineno:78	type:string
s4	__DIR__/hint_ecma5.js	/s4/;"	v	lineno:81	type:string
person	__DIR__/hint_ecma5.js	/person/;"	v	lineno:86
firstname	__DIR__/hint_ecma5.js	/firstname/;"	v	lineno:87	namespace:person	type:string
lastname	__DIR__/hint_ecma5.js	/lastname/;"	v	lineno:88	namespace:person	type:string
age	__DIR__/hint_ecma5.js	/age/;"	v	lineno:89	namespace:person	type:number
eyecolor	__DIR__/hint_ecma5.js	/eyecolor/;"	v	lineno:90	namespace:person	type:string
eyecolor	__DIR__/hint_ecma5.js	/eyecolor/;"	v	lineno:95	namespace:personType	type:string
age	__DIR__/hint_ecma5.js	/age/;"	v	lineno:95	namespace:personType	type:number
firstname	__DIR__/hint_ecma5.js	/firstname/;"	v	lineno:95	namespace:personType	type:string
personType	__DIR__/hint_ecma5.js	/personType/;"	f	lineno:95	type:void function(string, string, number, string)
lastname	__DIR__/hint_ecma5.js	/lastname/;"	v	lineno:95	namespace:personType	type:string
firstname	__DIR__/hint_ecma5.js	/firstname/;"	v	lineno:96	namespace:friend	type:string
lastname	__DIR__/hint_ecma5.js	/lastname/;"	v	lineno:97	namespace:friend	type:string
age	__DIR__/hint_ecma5.js	/age/;"	v	lineno:98	namespace:friend	type:number
eyecolor	__DIR__/hint_ecma5.js	/eyecolor/;"	v	lineno:99	namespace:friend	type:string
changeName	__DIR__/hint_ecma5.js	/changeName/;"	f	lineno:100	namespace:personType	type:!this.lastname function(?)
name	__DIR__/hint_ecma5.js	/name/;"	v	lineno:104	namespace:personType.changeName
friend	__DIR__/hint_ecma5.js	/friend/;"	v	lineno:110	type:personType
bar	__DIR__/hint_ecma5.js	/bar/;"	v	lineno:119	namespace:base	type:number
foo2	__DIR__/hint_ecma5.js	/foo2/;"	v	lineno:119	namespace:base
a	__DIR__/hint_ecma5.js	/a/;"	v	lineno:119	namespace:base.foo2	type:number
foo	__DIR__/hint_ecma5.js	/foo/;"	v	lineno:119	namespace:base	type:number
b	__DIR__/hint_ecma5.js	/b/;"	v	lineno:119	namespace:base.foo2	type:string
base	__DIR__/hint_ecma5.js	/base/;"	v	lineno:119
baz	__DIR__/hint_ecma5.js	/baz/;"	v	lineno:129	namespace:base	type:number
gen1	__DIR__/hint_ecma5.js	/gen1/;"	v	lineno:132
gen2	__DIR__/hint_ecma5.js	/gen2/;"	v	lineno:133
quux	__DIR__/hint_ecma5.js	/quux/;"	v	lineno:134	namespace:gen1	type:number
kaka	__DIR__/hint_ecma5.js	/kaka/;"	v	lineno:135	namespace:gen2	type:number
extend	__DIR__/hint_ecma5.js	/extend/;"	v	lineno:144
empty	__DIR__/hint_ecma5.js	/empty/;"	v	lineno:150
prop1	__DIR__/hint_ecma5.js	/prop1/;"	v	lineno:151	namespace:empty	type:string
Ctor1	__DIR__/hint_ecma5.js	/Ctor1/;"	f	lineno:155	type:void function()
a	__DIR__/hint_ecma5.js	/a/;"	v	lineno:156	namespace:Ctor1.prototype	type:number
prototype	__DIR__/hint_ecma5.js	/prototype/;"	v	lineno:156	namespace:Ctor1
Ctor2	__DIR__/hint_ecma5.js	/Ctor2/;"	f	lineno:159	type:void function()
singleton	__DIR__/hint_ecma5.js	/singleton/;"	v	lineno:164
Foo	__DIR__/hint_ecma5.js	/Foo/;"	f	lineno:166	type:void function(bool)
x	__DIR__/hint_ecma5.js	/x/;"	v	lineno:166	namespace:Foo	type:boolean
x	__DIR__/hint_ecma5.js	/x/;"	v	lineno:167	namespace:foo	type:boolean
y	__DIR__/hint_ecma5.js	/y/;"	v	lineno:168	namespace:Foo	type:[number]
prototype	__DIR__/hint_ecma5.js	/prototype/;"	v	lineno:171	namespace:Foo
makeString	__DIR__/hint_ecma5.js	/makeString/;"	f	lineno:172	namespace:Foo.prototype	type:string function()
bar	__DIR__/hint_ecma5.js	/bar/;"	v	lineno:173	namespace:Foo.prototype	type:number
foo	__DIR__/hint_ecma5.js	/foo/;"	v	lineno:176	type:Foo
config	__DIR__/hint_ecma5.js	/config/;"	v	lineno:182
CSS	__DIR__/hint_ecma5.js	/CSS/;"	v	lineno:183	namespace:config
IDs	__DIR__/hint_ecma5.js	/IDs/;"	v	lineno:184	namespace:config.CSS
container	__DIR__/hint_ecma5.js	/container/;"	v	lineno:185	namespace:config.CSS.IDs	type:string
canvas	__DIR__/hint_ecma5.js	/canvas/;"	v	lineno:186	namespace:config.CSS.IDs	type:string
player	__DIR__/hint_ecma5.js	/player/;"	v	lineno:187	namespace:config.CSS.IDs	type:string
controls	__DIR__/hint_ecma5.js	/controls/;"	v	lineno:188	namespace:config.CSS.IDs	type:string
years	__DIR__/hint_ecma5.js	/years/;"	v	lineno:201	type:[number]
arr1	__DIR__/hint_ecma5.js	/arr1/;"	v	lineno:206	type:[bool]
arr2	__DIR__/hint_ecma5.js	/arr2/;"	v	lineno:213	type:[number]
scope1	__DIR__/hint_ecma5.js	/scope1/;"	f	lineno:216	type:void function()
f	__DIR__/hint_ecma5.js	/f/;"	v	lineno:218
f2	__DIR__/hint_ecma5.js	/f2/;"	v	lineno:220
f3	__DIR__/hint_ecma5.js	/f3/;"	v	lineno:222
one	__DIR__/hint_ecma5.js	/one/;"	f	lineno:254	type:void function()
person	__DIR__/hint_ecma5.js	/person/;"	v	lineno:256	namespace:one	type:string
localVar1InOne	__DIR__/hint_ecma5.js	/localVar1InOne/;"	v	lineno:258	namespace:one	type:string
globalVar1	__DIR__/hint_ecma5.js	/globalVar1/;"	v	lineno:259	type:number
f	__DIR__/hint_ecma5.js	/f/;"	v	lineno:272	namespace:timeout
timeout	__DIR__/hint_ecma5.js	/timeout/;"	f	lineno:272	namespace:timeout	type:void function(?, ?)
timeout	__DIR__/hint_ecma5.js	/timeout/;"	v	lineno:272
obj	__DIR__/hint_ecma5.js	/obj/;"	v	lineno:273
name	__DIR__/hint_ecma5.js	/name/;"	v	lineno:274	namespace:obj	type:string
func	__DIR__/hint_ecma5.js	/func/;"	f	lineno:275	namespace:obj	type:void function()
localVarBecomeGlobal	__DIR__/hint_ecma5.js	/localVarBecomeGlobal/;"	v	lineno:285	type:[number]
testIfControlFlow1	__DIR__/hint_ecma5.js	/testIfControlFlow1/;"	f	lineno:291	type:void function()
varInIf	__DIR__/hint_ecma5.js	/varInIf/;"	v	lineno:294	namespace:testIfControlFlow1	type:string
f	__DIR__/hint_ecma5.js	/f/;"	v	lineno:296	namespace:testIfControlFlow1
name	__DIR__/hint_ecma5.js	/name/;"	v	lineno:299	namespace:testIfControlFlow1.f	type:string
inNestedIf	__DIR__/hint_ecma5.js	/inNestedIf/;"	v	lineno:303	namespace:testIfControlFlow1	type:string
t	__DIR__/hint_ecma5.js	/t/;"	v	lineno:305	namespace:testIfControlFlow1
testForControlFlow1	__DIR__/hint_ecma5.js	/testForControlFlow1/;"	f	lineno:317	type:void function()
m	__DIR__/hint_ecma5.js	/m/;"	v	lineno:321	namespace:testForControlFlow1	type:string
n	__DIR__/hint_ecma5.js	/n/;"	v	lineno:322	namespace:testForControlFlow1	type:number
varInForLoop	__DIR__/hint_ecma5.js	/varInForLoop/;"	v	lineno:323	namespace:testForControlFlow1	type:string
j	__DIR__/hint_ecma5.js	/j/;"	v	lineno:324	namespace:testForControlFlow1	type:number
varInNestedForLoop	__DIR__/hint_ecma5.js	/varInNestedForLoop/;"	v	lineno:325	namespace:testForControlFlow1	type:number
testForInLoopFlow1	__DIR__/hint_ecma5.js	/testForInLoopFlow1/;"	f	lineno:334	type:void function()
testWhileLoopFlow1	__DIR__/hint_ecma5.js	/testWhileLoopFlow1/;"	f	lineno:341	type:void function()
n	__DIR__/hint_ecma5.js	/n/;"	v	lineno:342	namespace:testWhileLoopFlow1	type:number
varInWhileLoop	__DIR__/hint_ecma5.js	/varInWhileLoop/;"	v	lineno:344	namespace:testWhileLoopFlow1	type:string
testDoWhileLoopFlow1	__DIR__/hint_ecma5.js	/testDoWhileLoopFlow1/;"	f	lineno:349	type:void function()
varInDoWhileLoop	__DIR__/hint_ecma5.js	/varInDoWhileLoop/;"	v	lineno:352	namespace:testDoWhileLoopFlow1	type:string
testBreakFlow1	__DIR__/hint_ecma5.js	/testBreakFlow1/;"	f	lineno:359	type:void function()
i	__DIR__/hint_ecma5.js	/i/;"	v	lineno:360	type:number
testBreak	__DIR__/hint_ecma5.js	/testBreak/;"	v	lineno:362	namespace:testBreakFlow1	type:string
testContinue	__DIR__/hint_ecma5.js	/testContinue/;"	v	lineno:365	namespace:testBreakFlow1	type:string
n	__DIR__/hint_ecma5.js	/n/;"	v	lineno:377	namespace:testSwitchFlow1
testSwitchFlow1	__DIR__/hint_ecma5.js	/testSwitchFlow1/;"	f	lineno:377	type:void function(?)
inCase1	__DIR__/hint_ecma5.js	/inCase1/;"	v	lineno:381	namespace:testSwitchFlow1	type:string
inCase2	__DIR__/hint_ecma5.js	/inCase2/;"	v	lineno:385	namespace:testSwitchFlow1	type:string
testTryCatchFlow1	__DIR__/hint_ecma5.js	/testTryCatchFlow1/;"	f	lineno:398	type:void function()
varInTry	__DIR__/hint_ecma5.js	/varInTry/;"	v	lineno:400	namespace:testTryCatchFlow1	type:string
varInCatch	__DIR__/hint_ecma5.js	/varInCatch/;"	v	lineno:403	namespace:testTryCatchFlow1	type:string
```
