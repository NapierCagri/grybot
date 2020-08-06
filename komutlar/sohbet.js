const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {

  let kanal = client.channels.get("731982720804323341")
  let mesaj = args.slice(0).join(' ');
  message.delete()
  kanal.send(mesaj)
  
  
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sohbet', "ehehe"],
  permLevel: 4
};

exports.help = {
  name: 'sohbet',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};