const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {

  var gif = [
    "https://thumbs.gfycat.com/ImpassionedHotCattle-size_restricted.gif",
    "https://i.makeagif.com/media/8-19-2019/Gqmpcf.gif",
    "https://galeri8.uludagsozluk.com/436/kendini-prenses-sanan-kiza-soylenecek-tek-sey_937382.gif",
    "https://galeri13.uludagsozluk.com/748/nah_1379385.gif",

  ]
  let kisi = message.mentions.users.first()
  if(!kisi) return message.channel.send("Kime NAH çekelim")
  let olduren = message.author
  var gonder = gif[Math.floor(Math.random()*gif.length)];
  message.channel.send("<@" + olduren.id + ">, <@" + kisi.id + "> kişisine NAH çekti" ,{file: gonder})
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'nah',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};