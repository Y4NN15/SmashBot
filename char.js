const Discord = require("discord.js");
const fetch = require('node-fetch');

exports.getData = async function(character, attack){
    let char = require('./data/'+character+'.json');

    switch(attack){
        /*
         * SPECIALS
         */
        case 'upb':
            return this.card(char.attacks.special[0]);
            break;
        // case 'laser':
        case 'neutralb':
            return this.card(char.attacks.special[1]);
            break;
        case 'sideb':
            return this.card(char.attacks.special[2]);
            break;
        // case 'shine':
        case 'downb':
            return this.card(char.attacks.special[3]);
            break;

        /*
        * JABS
        */
        case 'jab1':
            return this.card(char.attacks.jab[0]);
            break;
        case 'jab2':
            return this.card(char.attacks.jab[1]);
            break;
        case 'jab3':
        case 'multijab':
            return this.card(char.attacks.jab[2]);
            break;/*
        case 'jabs':
            break;*/

        /*
         * TILTS
         */
        case 'utilt':
        case 'uptilt':
            return this.card(char.attacks.tilt[0]);
            break;
        case 'ftilt':
            return this.card(char.attacks.tilt[1]);
            break;
        case 'lowftilt':
        case 'ftiltlow':
            return this.card(char.attacks.tilt[2]);
            break;
        case 'highftilt':
        case 'ftilthigh':
            return this.card(char.attacks.tilt[3]);
            break;
        case 'dtilt':
            return this.card(char.attacks.tilt[4]);
            break;

        /*
         * SMASH
         */
        case 'usmash':
        case 'upsmash':
            return this.card(char.attacks.smash[0]);
            break;
        case 'fsmash':
            return this.card(char.attacks.smash[1]);
            break;
        case 'dsmash':
            return this.card(char.attacks.smash[2]);
            break;

        /*
         * AERIALS
         */
        case 'upair':
        case 'uair':
            return this.card(char.attacks.aerial[0]);
            break;
        case 'fair':
            return this.card(char.attacks.aerial[1]);
            break;
        case 'nair':
            return this.card(char.attacks.aerial[2]);
            break;
        case 'dair':
        case 'downair':
        case 'drill':
            return this.card(char.attacks.aerial[3]);
            break;
        case 'bair':
        case 'backair':
            return this.card(char.attacks.aerial[4]);
            break;

        /*
         * OTHER
         */
        case 'roll':
            return await this.card(char.attacks.roll[0])
                + "\n\n" +
                await this.card(char.attacks.roll[1]);
            break;
        case 'dash':
            return this.card(char.attacks.dash[0]);
            break;
        case 'dashattack':
            break;
        case 'grab':
            return await this.card(char.attacks.grab[0])
                + "\n\n" +
                await this.card(char.attacks.grab[1]);
            break;
        case 'airdodge':
            return this.card(char.attacks.aerial[5]);
            break;
        case 'spotdodge':
            return this.card(char.attacks.dodge[0]);
            break;
        default:
            return "Unknown attack. Please DM @Vek#1234 if you think it's a bug!";
            break;
    }
};

exports.card = async function(move){
    /*const embed = new Discord.RichEmbed()
        .setTitle("Fox " + move.description)
        .setColor(3447003)
        .setDescription("Frames")
        .setThumbnail('https://i.imgur.com/e6iqFph.png')
        .addField("Total Frames", move.total_frames, true)
        .addField('Starting Frame', move.hit_start, true)
        .setImage(await this.gif(move.gif_id))
        .addBlankField(true);*/
    const msg = "**" + move.charid + " " + move.description + "**" + "\n\n" +
        "_Total Frames_ : " + move.total_frames + "\n" +
        "_Starting Frame_ : " + move.hit_start + "\n\n"
        + await this.gif(move.gif_id);
    return msg; /*return embed;*/
};

exports.gif = async function(id){
    let rep = await fetch('https://smashlounge.herokuapp.com/gif/' + id).then(response => response.json());
    let url = rep.url;
    return "https://gfycat.com/" + url;
};

