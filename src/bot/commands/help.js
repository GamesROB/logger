module.exports = {
  func: async message => {
    let DMC
    try {
      DMC = await message.author.getDMChannel()
    } catch (e) {
      return message.channel.createMessage(`<@${message.author.id}>, you're not capable of receiving a DM from me.`).catch(() => {})
    }
    const embed = {
      description: 'Below, you can see my commands listed by name and description. If it has arguments you can pass, an example will be included.',
      color: 3553599,
      timestamp: new Date(),
      footer: {
        icon_url: global.bot.user.avatarURL,
        text: `${global.bot.user.username}#${global.bot.user.discriminator}`
      },
      thumbnail: {
        url: global.bot.user.avatarURL
      },
      author: {
        name: `${message.author.username}#${message.author.discriminator}`,
        icon_url: message.author.avatarURL
      },
      fields: []
    }
    Object.values(global.bot.commands).forEach(command => {
      if (!command.hidden) {
        embed.fields.push({
          name: command.name,
          value: command.description
        })
      }
    })
    embed.fields.push({
      name: 'Open Source',
      value: 'I\'m OSS at https://github.com/gamesrob/logger, based on https://github.com/curtisf/loggerv3'
    },
    {
      name: 'Support',
      value: 'You can get support for GamesROB in <#484835115852234756>.'
    },
    {
      name: 'Privacy Policy',
      value: 'You can view our Privacy Policy [here](https://github.com/GamesROB/documentation/blob/master/Wiki/Documentation/PrivacyPolicy.md) and additionally the privacy policy of the logging bot our Support Server bot is based on [here](https://gist.github.com/curtisf/0598b0930c11363d24e29300cf21d572)'
    })
    try {
      await DMC.createMessage({
        embed: embed
      })
      await message.addReaction('📜')
    } catch (_) {
      message.addReaction('❌')
    }
  },
  name: 'help',
  description: 'DM you with this help message!',
  type: 'any',
  category: 'General'
}
