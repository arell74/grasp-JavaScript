var s = '';

// for(var i = 10; i > 0; i--) {
//     for(var j = 0; j < i; j++) {
//         s += '*';
//         // s = s + '*'
//     }
//     s += '\n';
// }

// for(var k = 1; k <= 10; k++) {
//     for(var l = 0; k > l; l++){
//         s += '*';
//     }
//     s += '\n'
// }
// console.log(s);

for(var i = 1; i <= 10; i++){
    for(var d = 0; d < i; d++){
        s += '*';
    }
    s += '\n';
}

for(var k = 10; k > 0; k--){
    for(var j = 0; j < k; j++){
        s += '*';
    }
    s += '\n'
}
console.log(s);