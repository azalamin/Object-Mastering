const normalPerson = {
   first: "Rakib",
   last: 'Sheikh',
   salary: 15000,
   getFullName: function(){
      const fullName = `${this.first} ${this.last}`
      return fullName;
   },
   chargeBill: function(amount, tip, tax){
      console.log(this)
      this.salary = this.salary - amount - tip - tax;
      return this.salary;
   }
}

const heroPerson = {
   firstName: 'Hero',
   lastName: 'Balam',
   salary: 25000
}

const friendlyPerson = {
   firstName: 'Hero',
   lastName: 'Golam',
   salary: 30000
}

const mySelf = {
   fName: 'Al-amin',
   lName: 'Sheikh',
   salary: 40000
}

// const heroPersonChargeBill = normalPerson.chargeBill.bind(heroPerson)
// const friendlyPersonChargeBill = normalPerson.chargeBill.bind(friendlyPerson)
// const mySelfChargeBill = normalPerson.chargeBill.bind(mySelf)

// heroPersonChargeBill(99)
// console.log(heroPerson.salary)
// friendlyPersonChargeBill(97)
// console.log(friendlyPerson.salary)
// mySelfChargeBill(93)
// console.log(mySelf.salary)

// normalPerson.chargeBill.call(heroPerson, 5000, 200, 70)
// normalPerson.chargeBill.call(friendlyPerson, 9000, 400, 100)
// console.log(heroPerson.salary)
// console.log(friendlyPerson.salary)
// console.log(normalPerson.salary)

normalPerson.chargeBill.apply(heroPerson, [10000, 500, 150])
console.log(heroPerson.salary)
