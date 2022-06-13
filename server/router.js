

var model = {
    23:
    {
    ProductName: {value: 'TestName'}
}
}

const f = (model) => {
    return Object.keys(model)[0]
}

let id = f(model);

let cell = f(model[id])

let value = model[id][cell].value
console.log(id)
console.log(cell)
console.log(value)