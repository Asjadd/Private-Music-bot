var {
    getData,
    getPreview
  } = require("spotify-url-info");
  const DeezerPublicApi = require('deezer-public-api');
  let deezer = new DeezerPublicApi();
  module.exports = {
    name: "join",
    category: "MUSIC COMMANDS",
    aliases: ["connect", "enter"],
    cooldown: 5,
    useage: "join",
    description: "The bot will join the voice channel",
    run: async (client, message, args) => {

      if (!message.member.voice.channel) return functions.embedbuilder(client, 5000, message, config.colors.no, "`" + message.author.tag + "`" + " You must join a voice channle first")
      

      if(message.guild.me.voice.channel) return functions.embedbuilder(client, 5000, message, config.colors.no, " already connected somewhere")
     

      if (!message.guild.me.permissionsIn(message.member.voice.channel).has("CONNECT"))
        return functions.embedbuilder(client, 5000, message, config.colors.no, "`" + message.author.tag + "`" + " im not allowed to \`join\` your Channel")
  

      message.member.voice.channel.join().catch(e=>{
        return functions.embedbuilder(client, 5000, message, config.colors.no, "`" + message.author.tag + "`" + " im not allowed to \`join\` your Channel")
      })
     
     
     
  
    }
  };