const array = [1, 2, 3, 4, 5, 6, 7, 8];

result = array.map((item) => item + 2);
console.log(result);

const fruit = {
    value: 2,
};

function mapThis(array, thisArg){
   return array.map(function(item) {
       return item * this.value;
   }, thisArg);
}

console.log(mapThis(array, fruit));