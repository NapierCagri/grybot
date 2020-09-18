const Discord = require('discord.js');
const embed = new Discord.RichEmbed();

exports.run = (client, message, args) => {
   let mesaj = args.slice(0).join(' ');
  const kis = message.author
    var msj = [
      "Olacağını düşünmek Yoda, rahat olmak sen.",
      "Olacağını ummak mı Yoda gibi?",
      "Olamamak ben emin, ama inanmak olacağına.",
      "Bilmemek ben bir şey.",
      "Üzüldüm buna ben, çünkü olmayacak muhtemelen olacak şey.",
      "Olmayacak olması gereken şey.",
      "Ümidi kestiğini gördüm ben olacak olan şeyden.",
      "Olamayacağını düşündün sen Yoda gibi.",
    ];

    var yanıt = msj[Math.floor(Math.random() * msj.length)];
    const embedd = new Discord.RichEmbed()
      .setColor('#FF0000')
      .addField(kis.username + ": ", mesaj)
      .addField("Yoda: ", yanıt)
    message.channel.send("<@" + kis.id + ">", embedd)
};


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['fal'],
  permLevel: 0
};

exports.help = {
  name: 'fal',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};
