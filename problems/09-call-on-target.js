function callOnTarget(func, obj1, obj2) {
  // Your code here
  return func.bind(obj1,obj2)();
  //return func.bind(null,...args);
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
