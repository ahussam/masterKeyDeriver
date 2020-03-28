const readline = require('readline-sync');

console.log(
    "\x1b[33m",
    ` ________________________________________
< I am not just a cow I am good at crypto too! >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`
);

console.log("\x1b[37m", ` Usage: nodejs masterKeyDeriver.js --keys=4`);

var args = process.argv.slice(2);

// Check args length

if (args.length >= 1) {
    if (!(args[0].split("=")[0] === "--keys")) {
        console.log(
            "Error:",
            "Problem with key value make sure you use flag as --keys={value}"
        );

        //process.exit();
    }

    var keys = parseInt(args[0].split("=")[1]);

    // check if keys is number and even  and limit keys to 8

    if (isNaN(keys) || keys % 2 !== 0 || keys < 2 || keys > 8 || keys === 6) {
        console.log(
            "Error:",
            "Problem with key value make sure key value is 2 or 4 or 8"
        );
      //  process.exit();
    } else {

        var keysArr = [];

     
        for (let i = 0; i < keys; i++) {
            var key = readline.question(`\n Key ${i+1}: `);
            keysArr.push(key);
        }

        // 
        var masterKey = keysArr.reduce(XOR_hex);
        console.log("\n  Your master key is: " + masterKey);
c
    }
}

function XOR_hex(a, b) {
    var res = "",
        i = a.length,
        j = b.length;
    while (i-- > 0 && j-- > 0)
        res =
            (parseInt(a.charAt(i), 16) ^ parseInt(b.charAt(j), 16)).toString(16) +
            res;
    return res;
}
