const Discord = require("discord.js");
const fetch = require('node-fetch');

exports.getData = async function(character, attack){
    let char = "";

    if (character === 'puff' || character === 'rondoudou') {
        char = require('./data/jigglypuff.json');
    } else if (character === 'cptfalcon' || character === 'captainfalcon') {
        char = require('./data/falcon.json');
    } else if (character === 'ics' || character === 'ic') {
        char = require('./data/iceclimbers.json');
    } else if (character === 'ylink' || character === 'yl') {
        char = require('./data/younglink.json');
    } else if (character === 'gw' || character === 'gameandwatch' || character === 'g&w' || character === 'mgameandwatch') {
        char = require('./data/mrgameandwatch.json');
    } else if (character === 'dk') {
        char = require('./data/donkeykong.json');
    } else if (character === 'ganon') {
        char = require('./data/ganondorf.json');
    } else {
        char = require('./data/' + character + '.json');
    }

    let aerials = ['Up Air', 'Forward Air', 'Neutral Air', 'Down Air', 'Back Air', 'Air Dodge'];
    let smashes = ['Up Smash', 'Forward Smash', 'Down Smash'];
    let tilts = ['Up Tilt', 'Forward Tilt', 'Forward Tilt Low', 'Forward Tilt High', 'Down Tilt'];
    let specials = ['Up B', 'Neutral B', 'Side B', 'Down B'];
    let jabs = ['Jab 1', 'Jab 2', 'Jab 3'];

    let directions = ['up', 'forward', 'neutral', 'back', 'down'];

    switch(attack){
        /*
         * SPECIALS
         */
        case 'upb':
            return this.attack('special', directions[0], char);
            break;
        // case 'laser':
        case 'neutralb':
            return this.attack('special', directions[2], char);
            break;
        case 'sideb':
            return this.attack('special', directions[1], char);
            break;
        // case 'shine':
        case 'downb':
            return this.attack('special', directions[4], char);
            break;

        /*
        * JABS
        */
        case 'jab1':
            return this.attack('jab', jabs[0], char);
            break;
        case 'jab2':
            return this.attack('jab', jabs[1], char);
            break;
        case 'jab3':
        case 'multijab':
            return this.attack('jab', jabs[2], char);
            break;/*
        case 'jabs':
            break;*/

        /*
         * TILTS
         */
        case 'utilt':
        case 'uptilt':
            return this.attack('tilt', tilts[0], char);
            break;
        case 'ftilt':
            return this.attack('tilt', tilts[1], char);
            break;
        case 'lowftilt':
        case 'ftiltlow':
            return this.attack('tilt', tilts[2], char);
            break;
        case 'highftilt':
        case 'ftilthigh':
            return this.attack('tilt', tilts[3], char);
            break;
        case 'dtilt':
            return this.attack('tilt', tilts[4], char);
            break;

        /*
         * SMASH
         */
        case 'usmash':
        case 'upsmash':
            return this.attack('smash', directions[0], char);
            break;
        case 'fsmash':
            return this.attack('smash', directions[2], char);
            break;
        case 'dsmash':
            return this.attack('smash', directions[4], char);
            break;

        /*
         * AERIALS
         */
        case 'upair':
        case 'uair':
            return this.attack('aerial', directions[0], char);
            break;
        case 'fair':
            return this.attack('aerial', directions[1], char);
            break;
        case 'nair':
            return this.attack('aerial', directions[2], char);
            break;
        case 'dair':
        case 'downair':
        //case 'drill':
            return this.attack('aerial', directions[4], char);
            break;
        case 'bair':
        case 'backair':
            return this.attack('aerial', directions[3], char);
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
            return "Unknown attack or missing data. Please DM a Tech Admin if you think it's a bug!";
            break;
    }
};

exports.attack = async function(type, attack, char){
    switch (type){
        case 'smash':
            for (let i = 0 ; i < char.attacks.smash.length ; i++){
                if (char.attacks.smash[i].input_dir === attack){
                    return this.card(char.attacks.smash[i]);
                }
            }
            return "Unknown attack or missing data. Please DM a Tech Admin if you think it's a bug!";
            break;
        case 'special':
            for (let i = 0 ; i < char.attacks.special.length ; i++){
                if (char.attacks.special[i].input_dir === attack){
                    return this.card(char.attacks.special[i]);
                }
            }
            return "Unknown attack or missing data. Please DM a Tech Admin if you think it's a bug!";
            break;
        case 'tilt':
            for (let i = 0 ; i < char.attacks.tilt.length ; i++){
                if (char.attacks.tilt[i].description === attack){
                    return this.card(char.attacks.tilt[i]);
                }
            }
            return "Unknown attack or missing data. Please DM a Tech Admin if you think it's a bug!";
            break;
        case 'aerial':
            for (let i = 0 ; i < char.attacks.aerial.length ; i++){
                if (char.attacks.aerial[i].input_dir === attack){
                    return this.card(char.attacks.aerial[i]);
                }
            }
            return "Unknown attack or missing data. Please DM a Tech Admin if you think it's a bug!";
            break;
        case 'jab':
            for (let i = 0 ; i < char.attacks.jab.length ; i++){
                if (char.attacks.jab[i].description === attack){
                    return this.card(char.attacks.jab[i]);
                }
            }
            return "Unknown attack or missing data. Please DM a Tech Admin if you think it's a bug!";
            break;
    }
};

// building the answer
exports.card = async function(move){

    // base of the answer - name, attack, total frames
    const msg = "**" + move.charid + " " + move.description + "**\n\n" + "`Total Frames` " + move.total_frames + "\n";
    
    // first hitbox active frames
    if (move.hit_start != 0) {
        msg += "`Active Frames` " + move.hit_start + "-" + move.hit_end + "\n";
    }

    // TODO do the rest
    
    // obsolete - need to rewrite
    if (move.hit_second_start == 0) {

        const msg = "**" + move.charid + " " + move.description + "**" + "\n\n" +
            "`Total Frames` " + move.total_frames + "\n" +
            "`Active Frames` " + move.hit_start + "-" + move.hit_end + "\n" +
            "`IASA` " + move.iasa + "\n" +  
            "`Landing Lag (L-Cancelled)` " + move.landlag + " (" + move.lcancel + ")\n" +
            "`Shieldstun` TBA" + "\n\n"
            + await this.gif(move.gif_id);
        return msg;

    } else if (move.hit_third_start == 0) {
        const msg = "**" + move.charid + " " + move.description + "**" + "\n\n" +
            "`Total Frames` " + move.total_frames + "\n" +
            "`Active Frames` " + move.hit_start + "-" + move.hit_end + ", " + move.hit_second_start + "-" + move.hit_second_end + "\n" +
            "`IASA` " + move.iasa + "\n" +  
            "`Landing Lag (L-Cancelled)` " + move.landlag + " (" + move.lcancel + ")\n" +
            "`Shieldstun` TBA" + "\n\n"
            + await this.gif(move.gif_id);
        return msg;
    } else if (move.hit_fourth_start == 0) {
        const msg = "**" + move.charid + " " + move.description + "**" + "\n\n" +
            "`Total Frames` " + move.total_frames + "\n" +
            "`Active Frames` " + move.hit_start + "-" + move.hit_end + ", " + move.hit_second_start + "-" + move.hit_second_end + ", " + move.hit_third_start + "-" + move.hit_third_end + "\n" +
            "`IASA` " + move.iasa + "\n" + 
            "`Landing Lag (L-Cancelled)` " + move.landlag + " (" + move.lcancel + ")\n" +
            "`Shieldstun` TBA" + "\n\n"
            + await this.gif(move.gif_id);
        return msg;
    } else {
        const msg = "**" + move.charid + " " + move.description + "**" + "\n\n" +
            "`Total Frames` " + move.total_frames + "\n" +
            "`Active Frames` " + move.hit_start + "-" + move.hit_end + ", " + move.hit_second_start + "-" + move.hit_second_end + ", " + move.hit_third_start + "-" + move.hit_third_end + ", " + move.hit_fourth_start + "-" + move.hit_fourth_end + "\n" +
            "`IASA` " + move.iasa + "\n" +  
            "`Landing Lag (L-Cancelled)` " + move.landlag + " (" + move.lcancel + ")\n" +
            "`Shieldstun` TBA" + "\n\n"
            + await this.gif(move.gif_id);
        return msg;
    }
};

// get the gifs
// TODO script to get all the URLs locally
exports.gif = async function(id){

    let rep = await fetch('https://smashlounge.herokuapp.com/gif/' + id).then(response => response.json());
    let url = rep.url;
    return "https://gfycat.com/" + url;

};

