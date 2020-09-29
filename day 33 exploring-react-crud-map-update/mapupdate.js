const numbers=[10,25,30,45]

// const result=numbers.map(ele=> ele+2)

// console.log(result)

const result=numbers.map(ele =>{
    if(ele%2==0)
    {
        return ele+2
    }
    else
    {
        return ele
    }
})

console.log(result)


