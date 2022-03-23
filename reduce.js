function sum(array){
    return array.reduce(function(prev, current){
        return prev + current;
    })
}

const array = [1, 2, 4, 5]
console.log(sum(array));

const lista = [
    {
        name: "sabao em po",
        preco: 30
    },
    {
        name: "toalha",
        preco: 30,
    },
    {
        name: "camisa",
        preco: 40,
    }
]

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function (prev, current){
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));