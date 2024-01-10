let userInput = prompt ("Please input your froyo ${flavors} separated by a comma and space:");

let froyo = {
    flavors: ["vanilla", "chocolate", "strawberry", "blueberry"],
}

let splitArr = userInput.split(", ");

console.log(splitArr);
