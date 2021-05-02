const myObj = {
   name: "Kuddus Ali",
   getFullName: function(){
      console.log(this)
      return "Mr "+ this.name;
   }
}

const anotherObj = {
   name: "Jamal Vuian",
}

// anotherObj.getFullName = myObj.getFullName;
// console.log(anotherObj.getFullName)

function add(a, b){
   console.log(this)
   return a + b
}
add(12, 13)

anotherObj.sum = add;
console.log(anotherObj.sum(12, 12))
console.log(anotherObj)