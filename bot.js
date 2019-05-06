const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');
const fetch = require('node-fetch');
const fox = require('./characters/fox.js');
const char = require('./char.js');

const data = require('./get/getTest.js');

client.on("ready", () => {
    console.log("SmashBot ready to be used.");
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
        case 'bonjour':
            message.channel.send("Salut :)");
            break;
        default:
            for (let arg of args) {
                message.channel.send(await char.getData(command, arg));
            }
            break;
    }
});

client.login(config.token);