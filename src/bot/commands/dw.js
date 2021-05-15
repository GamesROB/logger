module.exports = {
  func: async (message, suffix) => {
    message.channel.createMessage(`Please be more informative. We can't do anything with "doesn't work"/"can't do"/"is broken".\n
    What isn't working? Which part did you get to? Can you provide screenshots?\n
    Sorry for the inconvenience in advance.`)
  },
  name: 'dw',
  description: 'Basically says \"be more specific\" with more words because people don\'t always listen.',
  quickHelp: 'Basically says \"be more specific\" with more words because people don\'t always listen.',
  examples: `\`${process.env.GLOBAL_BOT_PREFIX}dw\` <- Responds with a message telling people to be more specific`,
  type: 'creator',
  hidden: true
}