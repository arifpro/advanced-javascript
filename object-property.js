const students = [
    { id: 21, name: 'Pro Arif' },
    { id: 31, name: 'Arif Web' },
    { id: 41, name: 'Abdullah' },
    { id: 71, name: 'Khan' }
];

const names0 = [];
for (let i = 0; i < students.length; i++) {
    names0.push(students[i].name);
}
console.log(names0);

//or
const names = students.map(s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter(s => s.id>40);
const biggerOne = students.find(s => s.id > 40);
console.log(biggerOne);