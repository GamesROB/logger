module.exports = {
  func: async (message, suffix) => {
    message.channel.createMessage(`Thanks for the feedback! This is already known or suggested.\n
    You can expect it being fixed or added on a later update. Stay tuned!`)
  },
  name: 'known',
  description: 'Thanks the person for suggesting/reporting something while telling them someone else previously did so.',
  quickHelp: 'Thanks the person for suggesting/reporting something while telling them someone else previously did so.',
  examples: `\`${process.env.GLOBAL_BOT_PREFIX}known\` <- Responds with a message telling people to be more specific`,
  type: 'staff',
  hidden: true
}