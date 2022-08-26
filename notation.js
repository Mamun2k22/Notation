const student = {
    name: 'Mamun Khan',
    age: 21,
    marks:{
        math:75,
        physic: 80,
        chemistry: 50
    }
}
const mark = student.marks
const math = student.marks.math
const subject = 'chemistry';
const subjectMark = student.marks[subject]
console.log(subjectMark);
//console.log(mark);
//console.log(math);