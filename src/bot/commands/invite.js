module.exports = {
  func: async message => {
    message.channel.createMessage({
      embed: {
        description: `I'm based on [James Bond#0007's Logger bot](https://top.gg/bot/298822483060981760) which you can invite with [this link](https://discord.com/oauth2/authorize?client_id=298822483060981760&scope=bot&permissions=536988833). Unless you're using his version of Logger you should be talking to GamesROB Support in <#484835115852234756>`,
        color: 3553599,
        timestamp: new Date(),
        footer: {
          icon_url: global.bot.user.avatarURL,
          text: `${global.bot.user.username}#${global.bot.user.discriminator}`
        },
        author: {
          name: `${message.author.username}#${message.author.discriminator}`,
          icon_url: message.author.avatarURL
        }
      }
    })
  },
  name: 'invite',
  description: 'Get my invite link.',
  type: 'any',
  category: 'General'
}
