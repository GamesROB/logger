module.exports = {
  func: async (message, suffix) => {
    let DMC
    try {
      DMC = await message.author.getDMChannel()
    } catch (e) {
      return message.channel.createMessage(`<@${message.author.id}>, you're not capable of receiving a DM from me.`).catch(() => {})
    }

    if (suffix) {
      if (!global.bot.commands[suffix] || global.bot.commands[suffix]?.hidden) {
        return message.channel.createMessage(`<@${message.author.id}>, that isn't a valid command. Use \`${process.env.GLOBAL_BOT_PREFIX}help\` to see all commands.`)
      }
      await message.channel.createMessage({
        embed: {
          title: `Help for ${suffix}`,
          description: global.bot.commands[suffix].quickHelp,
          fields: [{
            name: 'Examples',
            value: global.bot.commands[suffix].examples
          }],
          color: 0xFFFFFF
        }
      })
    } else {
      const embed = {
        description: `Below, you can see my commands listed by name and description. To learn more about a command or view examples, use ${process.env.GLOBAL_BOT_PREFIX}help commandname.`,
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
            value: `${command.quickHelp}\n\nExample(s):\n${command.examples}`
          })
        }
      })
      try {
        await DMC.createMessage({
          embed: embed
        })
        await DMC.createMessage({
          embed: {
            description: 'Continued help information...',
            fields: [{
              name: 'Open Source',
              value: 'I\'m OSS at https://github.com/gamesrob/supportbot, based on https://github.com/curtisf/logger'
            },
            {
              name: 'Support',
              value: 'You can get support for GamesROB in <#484835115852234756>.'
            },
            {
              name: 'Privacy Policy',
              value: 'You can view GamesROB\'s Privacy Policy [here](https://github.com/GamesROB/documentation/blob/master/Wiki/Documentation/PrivacyPolicy.md) and additionally the privacy policy of the logging bot our Support Server bot is based on [here](https://gist.github.com/curtisf/0598b0930c11363d24e29300cf21d572)'
            },
            {
              name: 'Patreon',
              value: 'If you enjoy GamesROB, check out [our Patreon](https://patreon.com/GamesROB) to get access to a variety of cool perks!'
            }]
          }
        })
        await message.addReaction('📜')
      } catch (_) {
        console.log(_)
        message.addReaction('❌')
      }
    }
  },
  name: 'help',
  quickHelp: 'DM you with a help message!',
  examples: `\`${process.env.GLOBAL_BOT_PREFIX}help\` <- DM a help message with every command
  \`${process.env.GLOBAL_BOT_PREFIX}help setchannel\` <- get further info (examples) on any command`,
  type: 'any',
  category: 'General'
}
