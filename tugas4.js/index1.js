const countuniquevalues = (array) => {
    const resultarray = []
    for(const item of array){
        if(!resultarray.includes(item)) resultarray.push(item)
    }
    console.log(resultarray.length)
}

countuniquevalues([1, 2, 3, 4, 4, 4, 7, 7, 12, 13])
countuniquevalues([1, 2, 2, 2, 2, 2, 2, 2, 4, 6])
countuniquevalues([])