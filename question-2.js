const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

const result = students.filter(checkScore => checkScore.score > 50).map(addScore => addScore.score + (addScore.score*0.1)).reduce((acc,cur) => acc+cur,0)
console.log(`Total score is ${result}`)
