const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

const allPeople = [...techupPeople,...techcoolPeople]
const peopleLessThan20 = allPeople.filter(checkAge => checkAge.age < 20) 
console.log(peopleLessThan20)
