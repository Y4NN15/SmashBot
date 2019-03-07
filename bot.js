const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require('node-fetch');
const fs = require('file-system');
const config = require('./config.json');

const fox = require('./characters/fox.js')

client.on("ready", () => {
    console.log("I am ready!");
});

client.on("message", (message) => {
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
        case 'salut':
            message.channel.send("Salut " + message.author.username + '! Tu as dis : ' + args[0]);
            break;
        case 'fox':
            for (const arg of args) {
                switch(arg){
                    case 'air':
                        message.channel.send(fox.getAerial("oui"));
                        break;
                    case 'smash':
                        message.channel.send(fox.getSmash("yes"));
                        break;
                    case 'special':
                        message.channel.send(fox.getSpecial("oui"));
                        break;
                }
            }
            break;
    }
});

client.login(config.token);