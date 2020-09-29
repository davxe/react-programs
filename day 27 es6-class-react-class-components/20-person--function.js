function Person(fname,lname,c)
{
    this.firstName=fname
    this.lastName=lname
    this.country=c

    this.fullName=function(){
        return `${this.firstName} ${this.lastName} (${this.country.toUpperCase()})`
    }
}

const p1=new Person('sachin','tendulkar','India')
console.log(p1.fullName())