// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (someProperty) => {return someProperty};
const createNotEnumerableProperty = (someProperty) => {
    return Symbol(someProperty);
};

const createProtoMagicObject = () => {
let someObject = () => {};
someObject.prototype = someObject.__proto__;
return someObject;
};

Function.prototype.valueOf = function(){
    return value;
}

let value = 0;
const incrementor = () => {
    value ++;
    return incrementor
};

let count = 0;
const asyncIncrementor = () => {
  
};
const createIncrementer = () => {
 
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
         setTimeout(() => {
    // переведёт промис в состояние fulfilled с результатом param
    resolve(param);
  }, 1100)
    })
};

const getDeepPropertiesCount = (object) => {
  
};
const createSerializedObject = () => {
    let item = null;
    return item;
};
const toBuffer = () => {};
const sortByProto = (array) => {
    let sorted = array.sort((a, b) => ( a.__proto__ - b.__proto__));
    return sorted;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
