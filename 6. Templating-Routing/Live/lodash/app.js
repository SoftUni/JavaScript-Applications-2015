var arr = [
    {name: 'Gosho', grade: 6},
    undefined,
    {name: 'Gosho', grade: 4},
    null,
    {name: 'Aichkock', grade: 2},
    0
];

var someArr = [
    0,
    null
];


console.log(
    _.intersection(arr, someArr)
);