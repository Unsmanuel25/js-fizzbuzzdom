/* Scrivi i numeri da 1 a 100,
-per i multipli di 3 stampa Fizz al posto del numero
-per i multipli di 5 stampi Buzz
-per i numeri che sono multipli sia di 3 che di 5 stampa FizzBuzz
*/

for (let i = 1; i <= 100; i++) {

    let result = i;

    if (i % 3 === 0 && i % 5 === 0) {
        result = 'FizzBuzz';
    }

    else if (i % 3 === 0) {
        result = 'Fizz';
    }

    else if (i % 5 === 0) {
        result = 'Buzz';
    }

    console.log(result)
}