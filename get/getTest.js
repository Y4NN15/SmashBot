fetch('http://smashlounge.com/api/attack/char/10')
    .then(response => response.json())
    .then((data) => {
        fs.writeFile(__dirname + '/data/test.json', JSON.stringify(data), function(err, result){
            if (err) {
                console.log("error writefile : ", err);
            }
        })
    });