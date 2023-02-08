var depth = 35;

let days = 0;
let distance = 0;

while (distance < depth) {
    distance += 7;
    days++;
    // Every day the snail climb up 7 feet
    if (distance >= depth){
         break;
    }
    // Every night the snail return 2 feet
    distance -= 2;
}

console.log(days);
