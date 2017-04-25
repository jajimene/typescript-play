// The parameters 'x' and 'y' have the type number
let myAdd: (baseValue:number, increment:number) => number =
    function(x, y) { return x + y; };

console.log(myAdd(5, 12));

////////////////////////////////////////////////////////////////////////////////

function buildName(firstName: string, lastName?: string, title: string = 'Mr.') {
    if (lastName)
        return title + ' ' + firstName + ' ' + lastName;
    else
        return title + ' ' + firstName;
}

console.log(buildName('Santos'));
console.log(buildName('Santos', 'Jiménez'));
console.log(buildName('Pepa', 'Pérez', 'Mrs.'));
console.log(buildName('Pepa', null, 'Mrs.'));