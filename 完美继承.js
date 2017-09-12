function Person(o){
    this.name = o.name || ''
    this.age = o.age  || ''
}

Person.prototype.hello = function(){
    console.log('hi ' + this.name)
}


function Student(o){
    Person.call(this, o)
    this.grade = o.grade || ''
}

let prototype = Object.create(Person.prototype)
prototype.constructor = Student
Student.prototype = prototype


var lighting = new Student({
    name: 'lighting',
    age: '10',
    grade: '7'
})
