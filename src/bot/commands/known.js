module.exports = {
  func: async (message, suffix) => {
    message.channel.createMessage("Thanks for the feedback! That's has already been suggested or we already know about." + 
    "\nYou can expect it being fixed or added in a future update, stay tuned!")
  },
  name: 'known',
  description: 'Thanks the person for suggesting/reporting something while telling them someone else previously did so.',
  quickHelp: 'Thanks the person for suggesting/reporting something while telling them someone else previously did so.',
  examples: `\`${process.env.GLOBAL_BOT_PREFIX}known\` <- Responds with a message telling people to be more specific`,
  type: 'staff',
  hidden: true
}