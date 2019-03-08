const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');

const fox = require('./characters/fox.js');

const data = require('./get/getTest.js');

client.on("ready", () => {
    console.log("I am ready!");
    data.data();
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
        case 'test':
            message.channel.send({embed : {
                color: 3447003,
                description: 'Ceci est un type de message'
            }});
            break;
        case 'fox':
            for (const arg of args) {
                message.channel.send(fox.getData(arg));
                break;
            }
            break;
    }
});

client.login(config.token);