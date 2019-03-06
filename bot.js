const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require('node-fetch');
const fs = require('file-system');

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
    let reponse = "";
    if (message.content.startsWith("ping")) {
        fetch('http://smashlounge.com/api/attack/char/10')
            .then(response => response.json())
            .then((data) => {
                fs.writeFile(__dirname + '/data/test.json', JSON.stringify(data), function(err, result){
                    if (err) {
                        console.log("error writefile : ", err);
                    }
                })
            });
        message.channel.send("voir fichier!");
    }
});

client.login("NDc3OTUyNjkyMzA4NjcyNTEz.D2HDDg.fhmUmAOl9457HKvkREFL1daS5r0");