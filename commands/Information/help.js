const {codeBlock, StringSelectMenuBuilder, ActionRowBuilder, EmbedBuilder} = require("discord.js")
const client = global.client;
module.exports = {
    name: "help",
    category: "Information",
    aliases: ["h","yardım"],
    description: "Return all commands, or one specific command",
    args: false,
   execute: async (message, args, client, prefix) => {
  
    var l1 = await client.translate(message.guild.id,`Müzik Komutları`)
    var l2 = await client.translate(message.guild.id,`Diğer Komutlar`)
    var l3 = await client.translate(message.guild.id,"Yardım Menüsü")
    var l5 = await client.translate(message.guild.id,`Bot Hakkında Bilgi`)
    const menu = new ActionRowBuilder()
    .addComponents([
    new StringSelectMenuBuilder()
    .setCustomId('help')
    .setPlaceholder(`${l3}`)
    .setOptions([
    {value:"music",label:`${l1}`,emoji:"🎵"},
    {value:"other",label:`${l2}`,emoji:"✨"},
    {value:"dev",label:`${l5}`,emoji:"</>"},
    ])
    ])

    return message.channel.send(
      {embeds:
        [
          new EmbedBuilder()
          .setTitle('RodiBot')
          .addFields(
            { name: '🇹🇷  ', value:  'Alttaki Butonlardan İstediginiz Yardıma Ulaşabilirsiniz.' },
            { name: '🇺🇸  ', value:  'You can access the help you want from the buttons below.' },
          )
          .setColor("Random")
        ],components:[menu]
        }
      );
    }
}

client.on("interactionCreate",async(five) => {
if(!five.isStringSelectMenu())return;
var value = five.values[0];

if(value == "music"){
  five.reply({content:`${codeBlock('js',`
  Example; ${client.prefix}çal
  çal ,geç ,durdur ,sıra ,çalan ,döngü ,gir ,çık ,temizle ,duraklat ,devamet ,sil ,karıştır ,sözler ,atla ,ses`)}`,ephemeral:true})
}

if(value == "other"){
  five.reply({content:`${codeBlock('js',`
  Example; ${client.prefix}invite
  ,invite ,ping ,help`)}`,ephemeral:true})
}

if(value == "dev"){
  five.reply({content:`>  Discord : xflexpq`,ephemeral:true})
}

})