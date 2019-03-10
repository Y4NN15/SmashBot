const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const fetch = require('node-fetch');
const fox = require('./characters/fox.js');

const data = require('./get/getTest.js');

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", async message => {
    let prefix = false;
    for(const thisPrefix of config.prefixes) {
        if(message.content.startsWith(thisPrefix)) {
            prefix = thisPrefix;
        }
    }
    if (!prefix || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    switch (command) {
        case 'ping':
            message.channel.send("Test réussi!");
            break;
        case 'fox':
            for (let arg of args) {
                message.channel.send(await fox.getData(arg));
            }
            break;
    }
});

client.login(config.token);

exports.getUrl = function(id){

}