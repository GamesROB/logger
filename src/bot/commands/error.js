module.exports = {
  func: async (message, suffix) => {
    message.channel.createMessage(`https://discord.com/channels/${message.channel.guild.id}/590955038684479538/${suffix}`)
  },
  name: 'error',
  description: 'Returns a quick link to an error for the developers',
  quickHelp: 'Returns a quick link to an error for the developers',
  examples: `\`${process.env.GLOBAL_BOT_PREFIX}error 123456789123456789\` <- Returns a link to the error with ID 123456789123456789`,
  type: 'staff',
  hidden: true
}