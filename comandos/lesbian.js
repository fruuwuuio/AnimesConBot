const superagent = require("snekfetch");
const Discord = require('discord.js')
exports.run = async (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: | Use esse comando somente em canais adultos.")
    superagent.get('https://nekos.life/api/v2/img/les')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setImage(response.body.url)
      .setColor(`RANDOM`)
  message.channel.send(lewdembed);
    })
    }