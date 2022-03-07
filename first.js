// Question -1) How to compare two JSON have the same properties without order?
// var obj1 = { name: "Person 1", age:5 };
// var obj2 = { age:5, name: "Person 1" };

// Answer- Lodash  _.isEqual() method is used to compare two json having the same property without order.This method perform a comparision between two values to determine if they are equal or not.

 
var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };
 
console.log(_.isEqual(obj1,obj2));//true

