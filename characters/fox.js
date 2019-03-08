const fox = require('../data/6.json');
const Discord = require("discord.js");
const fetch = require('node-fetch');

exports.getData = function(attack){
    switch(attack){
        /*
         * SPECIALS
         */
        case 'upb':
            return fox.attacks.special[4].description;
            break;
        case 'laser':
            return this.card('laser');
            break;
        case 'neutralb':
            return this.requestGif(748);
            break;
        case 'sideb':
            break;
        case 'shine':
            break;
        case 'downb':
            break;

        /*
        * JABS
        */
        case 'jab1':
            break;
        case 'jab2':
            break;
        case 'jab3':
            break;
        case 'jabs':
            break;
        case 'multijab':
            break;

        /*
         * TILTS
         */
        case 'utilt':
            break;
        case 'uptilt':
            break;
        case 'ftilt':
            break;
        case 'lowftilt':
            break;
        case 'ftiltlow':
            break;
        case 'highftilt':
            break;
        case 'ftilthigh':
            break;
        case 'dtilt':
            break;

        /*
         * SMASH
         */
        case 'usmash':
            break;
        case 'upsmash':
            break;
        case 'fsmash':
            break;
        case 'dsmash':
            break;

        /*
         * AERIALS
         */
        case 'upair':
            break;
        case 'uair':
            break;
        case 'fair':
            break;
        case 'nair':
            break;
        case 'dair':
            break;
        case 'drill':
            break;
        case 'bair':
            break;

        /*
         * OTHER
         */
        case 'roll':
            // both front & back
            break;
        case 'dash':
            break;
        case 'dashattack':
            break;
        case 'grab':
            // both running & standing
            break;
        case 'airdodge':
            break;
        case 'spotdodge':
            break;
    }
}

exports.card = function(content){
    const embed = new Discord.RichEmbed()
        .setTitle("Fox " + content)
        .setColor(3447003)
        .setDescription("Description de l'attaque")
        .setFooter("Texte de footer")
        .setThumbnail('https://i.imgur.com/e6iqFph.png')
        //.setImage(this.requestGif(748))
        .addField("Titre de la catégorie", "Valeur de la catégorie", true)
        .addBlankField(true)
        .addField('Deuxième catégorie', "Valeur", true);
    return embed;
}

exports.requestGif = function(id){
    /*const url = fetch('https://smashlounge.herokuapp.com/gif/' + id)
        .then(response => response.json())
        .then((data) => {
            let rep = JSON.stringify(data);
            console.log("REP : " + rep);
            console.log("REP.URL : " + rep.url);
            return rep.url;
        });
    console.log("URL : " + url);*/
    const request = async () => {
        const response = await fetch('https://smashlounge.herokuapp.com/gif/' + id);
        const jsonRep = await response.json();
        return jsonRep.url;
    }
    return "https://gfycat.com/" + request();
}

