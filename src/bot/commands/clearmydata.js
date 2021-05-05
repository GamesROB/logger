module.exports = {
  func: async message => {
    await message.channel.createMessage({
      embed: {
        title: 'Action needed:',
        description: 'To clear your data, follow the email instructions outlined in the You and Your Data section of our [Privacy Policy](https://github.com/GamesROB/documentation/blob/master/Wiki/Documentation/PrivacyPolicy.md#you-and-your-data). **Keep in mind, when we delete your data we delete __ALL__ of your data across all of the bots.',
        color: 16711680,
        timestamp: new Date(),
        footer: {
          icon_url: global.bot.user.avatarURL,
          text: `${global.bot.user.username}#${global.bot.user.discriminator}`
        },
        author: {
          name: `${message.author.username}#${message.author.discriminator}`,
          icon_url: message.author.avatarURL
        },
        fields: []
      }
    })
  },
  name: 'clearmydata',
  quickHelp: 'Provides the information needed to clear your data from the bot. Your stored data (messages) is automatically deleted after two days from the database regardless of using this command.',
  examples: `\`${process.env.GLOBAL_BOT_PREFIX}clearmydata\``,
  type: 'any',
  category: 'Utility'
}
