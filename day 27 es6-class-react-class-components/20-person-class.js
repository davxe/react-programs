//class is a feature of es6 
class Person{
    constructor (fName,lName,c)//assign initial value to properties
    {
        this.firstName=fName
        this.lastName=lName
        this.country=c
    }
    fullName()
    {
        return `${this.firstName} ${this.lastName} (${this.country.toUpperCase()})`
    }
}
const p1=new Person('sachin','tendulkar','India')
console.log(p1.fullName())