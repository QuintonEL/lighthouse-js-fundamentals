const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
// let i = 0;
// while (i < ingredients.length) {
//   console.log(ingredients[i]);
//   i++;
// }
// Write a for loop that prints out the contents of ingredients:
// for (let i = 0; i < ingredients.length; i++) {
//   console.log(ingredients[i]);
// }
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = 0; i < ingredients.length / 2; i++) {
  let temp = ingredients[i];
  ingredients[i] = ingredients[ingredients.length - i - 1];
  ingredients[ingredients.length - i - 1] = temp;
}
for (let j = 0; j < ingredients.length; j++) {
    console.log(ingredients[j]);
}
