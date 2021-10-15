const {
	MessageEmbed
} = require("discord.js")
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
	name: "developer",
    category: "Information",
	aliases: ["dev", "asjad"],
	description: "Shows Information about the Developer",
	useage: "developer",
	run: async (client, message, args) => {
			message.channel.send(new MessageEmbed()
				.setColor(ee.wrongcolor)
				.setFooter("VΣXO BOT | by: Asjad", client.user.displayAvatarURL())
				.setTimestamp()
				.setThumbnail("https://cdn.discordapp.com/avatars/442355791412854784/17ccf170d62e5e0040660d003b075528.webp")
				.setTitle("Asjad#1213 | Discord  Developer" )
				.setURL("https://twitter.com/AsjadFn")
				.setImage("https://cdn.discordapp.com/attachments/833033500654960681/836917853277126666/sad-zenitsu-agatsuma-painting_bGZraGWUmZqaraWkpJRmbmdlrWZlbWU.png")
				.setDescription(`
				> Hello I am **Asjad** *(\`Asjad#1213\`)*,  on my free time i learn coding, atm in high school I really enjoy learning different languages and making different projects. Main Programming languages Js,Html,Css,Py
			> GitHub https://github.com/AsjadOwO

			> Zenistu Website  https://zenitsu.xyz/

			> Personal Website https://www.asjadowo.xyz/

			> Yeah i hope you like my stuff ❤️ :v: <3`)
			)
	}
}

