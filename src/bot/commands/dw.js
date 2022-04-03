module.exports = {
  func: async (message, suffix) => {
    message.channel.createMessage("> Please be more informative." +
    "\nCan you send some screenshots (or better yet, send a video)? Does it happen consistently (are there steps we can take to recreate what you're experiencing)?")
  },
  name: 'dw',
  description: 'Basically says \"be more specific\" with more words because people don\'t always listen.',
  quickHelp: 'Basically says \"be more specific\" with more words because people don\'t always listen.',
  examples: `\`${process.env.GLOBAL_BOT_PREFIX}dw\` <- Responds with a message telling people to be more specific`,
  type: 'staff',
  hidden: true
}
