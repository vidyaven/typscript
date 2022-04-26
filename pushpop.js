var fruit = ["Apple", "orange", "banana"];
fruit[2] = "stroberry";
fruit[3] = "grapes";
fruit.push("pappaya");
fruit.push("Mango");
fruit.pop();
console.log("poped :" + fruit[3]);
for (var _i = 0, fruit_1 = fruit; _i < fruit_1.length; _i++) {
    var temp = fruit_1[_i];
    console.log(temp);
}
