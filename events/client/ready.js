//here the event starts
const config = require("../../botconfig/config.json")
module.exports = client => {
  try{
    const stringlength = 69;
  
    console.log(` | `.bold.brightGreen + `Discord Bot is online!`.bold.brightGreen + " ".repeat(-1+stringlength-` ┃ `.length-`Discord Bot is online!`.length)+ "  ".bold.brightGreen)
   
  }catch{ /* */ }

  function presence() {
    let status = ['z?play', 'Listening to VΣXO', 'VΣXO BOT', 'Blasting Music',] 
    let rstatus = Math.floor(Math.random() * status.length); 
    client.user.setPresence({
        status: "online", //you can change this to any of your desire status
        activity: {
            name: `${status[rstatus]}`, 
            }
           
    }); 
}
console.log(`Logged in as ${client.user.tag}!`)
setInterval(presence, 5000)
}
