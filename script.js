let user_input;
// user_input = prompt("Enter a even number.");
// user_input = parseInt(user_input, 10);
// console.log(user_input);

do {
    user_input = prompt("Enter an even number.");
    user_input = parseInt(user_input, 10);
} while (user_input % 2 != 0);

// user_input = prompt("Enter an odd number.");
// user_input = parseInt(user_input, 10);
// console.log(user_input);

do {
    user_input = prompt("Enter an odd number.");
    user_input = parseInt(user_input, 10);
} while (user_input % 2 == 0);

var fruits = [];

for (var x = 0; x < 10; x++) {
    user_input = prompt("Fruit name.");
    fruits.push(user_input);
}

console.log(fruits);

var to_find = prompt("search for fruits?");
for (var i = 0; i < fruits.length; i++) {
    if (fruits[i] == to_find) {
        console.log(i);
        break;
    } else {
        console.log("It is not in here.");
        break;
    }
}
