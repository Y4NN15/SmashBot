const fetch = require('node-fetch');
const fs = require('file-system');
const fox = require('../data/fox.json');

exports.data = async function() {
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
    /*
    let rep = await fetch('https://smashlounge.herokuapp.com/gif/' + id).then(response => response.json());
    let url = rep.url;
    return "https://gfycat.com/" + url; 
    */

    let repertory = "./data/";


    // on lit le répertoire des json des persos
    fs.readdir(repertory, async function (err, files) {
        if (err) {
            console.error("Problème de listage du répertoire.", err);
            process.exit(1);
        }

        // pour chaque fichier
        files.forEach(async function (file, index) {

            // je récupère les ids des GIFs
            fs.readFile("data/" + file, async (err, data) => {
                if (err) {
                    console.error("Error when reading file " + file, err);
                    process.exit(1);
                }
                
                console.log("Searching through " + file + " gif ids.");

                let JSONchar = JSON.parse(data);

                for (let i = 0 ; i < JSONchar.attacks.aerial.length ; i++){
                    let id = JSONchar.attacks.aerial[i].gif_id;
                    console.log(id);
                    let rep = await fetch('https://smashlounge.herokuapp.com/gif/' + id).then(response => response.json());
                    let url = rep.url;
                    JSONchar.attacks.aerial[i].gif_url = url;
                    let jsonToPush = JSON.stringify(JSONchar);
                    fs.writeFile(file, jsonToPush, 'utf-8', function(error) {
                        if (error) throw error;
                    });
                }

                for (let j = 0 ; j < JSONchar.attacks.smash.length ; j++){
                    let id = JSONchar.attacks.smash[j].gif_id;
                    console.log(id);
                    let rep = await fetch('https://smashlounge.herokuapp.com/gif/' + id).then(response => response.json());
                    let url = rep.url;
                    JSONchar.attacks.smash[j].gif_url = url;
                    let jsonToPush = JSON.stringify(JSONchar);
                    fs.writeFile(file, jsonToPush, 'utf-8', function(error) {
                        if (error) throw error;
                    });
                }

                for (let k = 0 ; k < JSONchar.attacks.tilt.length ; k++){
                    let id = JSONchar.attacks.tilt[k].gif_id;
                    console.log(id);
                    let rep = await fetch('https://smashlounge.herokuapp.com/gif/' + id).then(response => response.json());
                    let url = rep.url;
                    JSONchar.attacks.tilt[k].gif_url = url;
                    let jsonToPush = JSON.stringify(JSONchar);
                    fs.writeFile(file, jsonToPush, 'utf-8', function(error) {
                        if (error) throw error;
                    });
                }

                for (let l = 0 ; l < JSONchar.attacks.special.length ; l++){
                    let id = JSONchar.attacks.special[l].gif_id;
                    console.log(id);
                    let rep = await fetch('https://smashlounge.herokuapp.com/gif/' + id).then(response => response.json());
                    let url = rep.url;
                    JSONchar.attacks.special[l].gif_url = url;
                    let jsonToPush = JSON.stringify(JSONchar);
                    fs.writeFile(file, jsonToPush, 'utf-8', function(error) {
                        if (error) throw error;
                    });
                }

                for (let m = 0 ; m < JSONchar.attacks.jab.length ; m++){
                    let id = JSONchar.attacks.jab[m].gif_id;
                    console.log(id);
                    let rep = await fetch('https://smashlounge.herokuapp.com/gif/' + id).then(response => response.json());
                    let url = rep.url;
                    JSONchar.attacks.jab[m].gif_url = url;
                    let jsonToPush = JSON.stringify(JSONchar);
                    fs.writeFile(file, jsonToPush, 'utf-8', function(error) {
                        if (error) throw error;
                    });
                }

                for (let n = 0 ; n < JSONchar.attacks.dash.length ; n++){
                    let id = JSONchar.attacks.dash[n].gif_id;
                    console.log(id);
                    let rep = await fetch('https://smashlounge.herokuapp.com/gif/' + id).then(response => response.json());
                    let url = rep.url;
                    JSONchar.attacks.dash[n].gif_url = url;
                    let jsonToPush = JSON.stringify(JSONchar);
                    fs.writeFile(file, jsonToPush, 'utf-8', function(error) {
                        if (error) throw error;
                    });
                }

                for (let o = 0 ; o < JSONchar.attacks.grab.length ; o++){
                    let id = JSONchar.attacks.grab[o].gif_id;
                    console.log(id);
                    let rep = await fetch('https://smashlounge.herokuapp.com/gif/' + id).then(response => response.json());
                    let url = rep.url;
                    JSONchar.attacks.grab[o].gif_url = url;
                    let jsonToPush = JSON.stringify(JSONchar);
                    fs.writeFile(file, jsonToPush, 'utf-8', function(error) {
                        if (error) throw error;
                    });
                }

                for (let p = 0 ; p < JSONchar.attacks.dodge.length ; p++){
                    let id = JSONchar.attacks.dodge[p].gif_id;
                    console.log(id);
                    let rep = await fetch('https://smashlounge.herokuapp.com/gif/' + id).then(response => response.json());
                    let url = rep.url;
                    JSONchar.attacks.dodge[p].gif_url = url;
                    let jsonToPush = JSON.stringify(JSONchar);
                    fs.writeFile(file, jsonToPush, 'utf-8', function(error) {
                        if (error) throw error;
                    });
                }

                for (let q = 0 ; q < JSONchar.attacks.dodge.length ; q++){
                    let id = JSONchar.attacks.dodge[q].gif_id;
                    console.log(id);
                    let rep = await fetch('https://smashlounge.herokuapp.com/gif/' + id).then(response => response.json());
                    let url = rep.url;
                    JSONchar.attacks.dodge[q].gif_url = url;
                    let jsonToPush = JSON.stringify(JSONchar);
                    fs.writeFile(file, jsonToPush, 'utf-8', function(error) {
                        if (error) throw error;
                    });
                }

                for (let r = 0 ; r < JSONchar.attacks.roll.length ; r++){
                    let id = JSONchar.attacks.roll[r].gif_id;
                    console.log(id);
                    let rep = await fetch('https://smashlounge.herokuapp.com/gif/' + id).then(response => response.json());
                    let url = rep.url;
                    JSONchar.attacks.roll[r].gif_url = url;
                    let jsonToPush = JSON.stringify(JSONchar);
                    fs.writeFile(file, jsonToPush, 'utf-8', function(error) {
                        if (error) throw error;
                    });
                }
                
            });
        })
    })
    
};