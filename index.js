const Discord = require("discord.js"); //discord js 
require('dotenv').config();
const colors = require("colors"); 
const fs = require("fs"); //following package is use for reading files
const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  disableEveryone: true,
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

client.commands = new Discord.Collection(); 
client.aliases = new Discord.Collection(); 
client.categories = fs.readdirSync("./commands/"); 
client.cooldowns = new Discord.Collection(); 
//file loading
["command", "events", "distube-handler"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
//logging in the bot using env file / one thing i wanna add if you don't wanna use env file just change it and place token in config.json
client.login(process.env.DISCORD_TOKEN); 

