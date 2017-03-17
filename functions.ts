// The parameters 'x' and 'y' have the type number
let myAdd: (baseValue:number, increment:number) => number =
    function(x, y) { return x + y; };

function buildName(firstName: string, lastName?: string, title: string = 'Mr.') {
    if (lastName)
        return title + ' ' + firstName + ' ' + lastName;
    else
        return title + ' ' + firstName;
}

console.log(myAdd(5, 12));
console.log(buildName('Santos'));
console.log(buildName('Santos', 'Jiménez'));
console.log(buildName('Pepa', 'Pérez', 'Mrs.'));