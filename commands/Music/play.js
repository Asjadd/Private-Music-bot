const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { getTracks, getPreview } = require("spotify-url-info")
module.exports = {
    name: "play",
    category: "Music",
    aliases: ["p","pl"],
    cooldown: 4,
    useage: "play <ur; /title>",
    description: "plays any song from youtube aka yt",
    run: async (client, message, args, cmduser, text, prefix) => {
    try{
      const { channel } = message.member.voice; 
      if(!channel)
        return message.channel.send(new MessageEmbed()
          .setColor(ee.wrongcolor)
          .setFooter(ee.footertext, ee.footericon)
          .setTitle(`✖️ Please join a Channel first`)
        );
      if(client.distube.getQueue(message) && channel.id !== message.guild.me.voice.channel.id)
        return message.channel.send(new MessageEmbed()
          .setColor(ee.wrongcolor)
          .setFooter(ee.footertext, ee.footericon)
          .setTitle(`✖️ Please join my  Channel first`)
          .setDescription(`Channelname: \`${message.guild.me.voice.channel.name}\``)
        );
      if(!args[0])
        return message.channel.send(new MessageEmbed()
          .setColor(ee.wrongcolor)
          .setFooter(ee.footertext, ee.footericon)
          .setTitle(`Please provide an search`)
          .setDescription(`Usage: \`${prefix}play <URL / TITLE>\``)
        );
      message.channel.send(new MessageEmbed()
        .setColor(ee.color)
        .setFooter(ee.footertext,ee.footericon)
        .setTitle("searching the following Song")
        .setDescription(`\`\`\`fix\n${text}\n\`\`\``)
      ).then(msg=>msg.delete({timeout: 3000}).catch(e=>console.log(e.message)))
      
      if(args.join(" ").toLowerCase().includes("spotify") && args.join(" ").toLowerCase().includes("track")){
        getPreview(args.join(" ")).then(result => {
          client.distube.play(message, result.title);
        })
      }
      else if(args.join(" ").toLowerCase().includes("spotify") && args.join(" ").toLowerCase().includes("playlist")){
        getTracks(args.join(" ")).then(result => {
          for(const song of result)
          client.distube.play(message, song.name);
        })
      }
      else {
        client.distube.play(message, text);
      }
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`✖️ An, error came`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}
