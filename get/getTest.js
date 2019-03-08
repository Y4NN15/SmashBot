const fetch = require('node-fetch');
const fs = require('file-system');

exports.data = function() {
    for (let i = 1; i <= 26; i++) {
        fetch('http://smashlounge.com/api/attack/char/' + i)
            .then(response => response.json())
            .then((data) => {
                fs.writeFile(__dirname + '/data/' + i + '.json', JSON.stringify(data), function (err, result) {
                    if (err) {
                        console.log("error writefile : ", err);
                    }
                })
            });
    }
}