module.exports = {
  func: async message => {
    await message.channel.createMessage({
      embed: {
        title: 'Configuration dashboard',
        description: `Hey, I'm ${global.bot.user.username}! I make the life of the GamesROB Team easier.`,
        url: 'https://gamesrob.com',
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
        fields: [
          {
            name: 'Technical Details',
            value: `${global.bot.user.username} is written in JavaScript utilizing the Node.js runtime. It uses the [eris](https://github.com/abalabahaha/eris) library to interact with the [Discord API](https://discord.com/developers/docs/intro). [PostgreSQL](https://postgresql.org) and [Redis](https://redis.io) are used. I\'m OSS at https://github.com/gamesrob/supportbot, based on https://github.com/curtisf/logger`
          },
          {
            name: 'The Project',
            value: `${global.bot.user.username} is a version of [James Bond#0007](https://github.com/curtisf)\'s [open source bot](https://github.com/curtisf/logger) called [Logger](https://top.gg/bot/298822483060981760) modified by [the GamesROB Team](https://github.com/orgs/GamesROB/people) and potentially some [community members](https://github.com/gamesrob/supportbot/graphs/contributors) in the future.`
          },
          {
            name: 'Shard Info',
            value: `Shard ID: ${message.channel.guild.shard.id}\nWebsocket latency: ${message.channel.guild.shard.latency}\nStatus: ${message.channel.guild.shard.status}`
          },
          {
            name: 'Privacy Policy',
            value: 'You can view GamesROB\'s Privacy Policy [here](https://github.com/GamesROB/documentation/blob/master/Wiki/Documentation/PrivacyPolicy.md) and additionally the privacy policy of the logging bot our Support Server bot is based on [here](https://gist.github.com/curtisf/0598b0930c11363d24e29300cf21d572)'
          }
        ]
      }
    })
  },
  name: 'info',
  quickHelp: 'Get information about how Logger was made and the current shard serving you.',
  examples: `\`${process.env.GLOBAL_BOT_PREFIX}info\``,
  type: 'any',
  category: 'Information'
}
