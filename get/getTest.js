const fetch = require('node-fetch');
const fs = require('file-system');
const fox = require('../data/fox.json');

exports.data = function() {
    /* for (let i = 1; i <= 26; i++) {
        fetch('http://smashlounge.com/api/attack/char/' + i)
            .then(response => response.json())
            .then((data) => {
                fs.writeFile(__dirname + '/data/' + i + '.json', JSON.stringify(data), function (err, result) {
                    if (err) {
                        console.log("error writefile : ", err);
                    }
                })
            });
    }*/


    for (let i = 0 ; i < fox.attacks.special.length ; i++){
        if (fox.attacks.special[i].description === specials[3]){

        }
    }
};