let userInput = prompt ("Please input your froyo flavors separated by a comma and space:");

let flavorsArray = userInput.split(", ");

console.log(flavorsArray);

function countFlavors(flavorsArray) {
    let flavorCount = {};
    
    for (let i = 0; i < flavorsArray.length; i++) {
        let flavor = flavorsArray[i];
        if (flavorCount[flavor]) {
            flavorCount[flavor]++;
        } else {
            flavorCount[flavor] = 1;
        }
    }
    return flavorCount;
}

let flavorCounts = countFlavors(flavorsArray);

console.table("Flavor counts:", flavorCounts);